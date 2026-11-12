import { readFileSync } from 'node:fs'
export const namespace = 'br.gov.rs.procergs'
const prefixes = { colors: 'color', spacing: 'space', typography: '', borders: 'border', radii: 'radius', shadows: 'shadow', motion: 'motion', sizes: 'size', layout: 'layout', layers: 'layer', breakpoints: 'breakpoint', interaction: 'interaction' }
const kebab = value => value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([a-z])(\d)/g, '$1-$2').replaceAll('_', '-').toLowerCase()
export const cssName = path => { const [family, ...parts] = path.split('.'); return 'govrs-' + [prefixes[family], ...parts.map(kebab)].filter(Boolean).join('-') }
const reference = value => typeof value === 'string' ? /^\{([^{}]+)\}$/.exec(value)?.[1] : undefined
const finite = value => typeof value === 'number' && Number.isFinite(value)
const fail = (path, message) => { throw new Error(`${path}: ${message}`) }

export function createModel(source) {
  const tokens = new Map(), names = new Set(), cache = new Map()
  function visit(node, parts = []) {
    const path = parts.join('.')
    if (!node || typeof node !== 'object' || Array.isArray(node)) fail(path, 'grupo inválido')
    if ('$value' in node) {
      if (Object.keys(node).some(key => !key.startsWith('$'))) fail(path, 'token não pode conter grupos filhos')
      if (typeof node.$description !== 'string' || !node.$description.trim()) fail(path, 'descrição obrigatória')
      if (!['base', 'semantic', 'component'].includes(node.$extensions?.[namespace]?.role)) fail(path, 'finalidade obrigatória')
      const name = cssName(path)
      if (names.has(name)) fail(path, `nome CSS duplicado: ${name}`)
      names.add(name); tokens.set(path, node); return
    }
    for (const [key, child] of Object.entries(node)) if (!key.startsWith('$')) {
      if (!key || /[.{}]/.test(key)) fail(path, `nome inválido: ${key}`)
      if (!parts.length && !(key in prefixes)) fail(path, `família desconhecida: ${key}`)
      visit(child, [...parts, key])
    }
  }
  visit(source)
  function resolve(path, stack = []) {
    if (cache.has(path)) return cache.get(path)
    const token = tokens.get(path)
    if (!token) fail(path, 'referência inexistente')
    if (stack.includes(path)) fail(path, 'referência circular: ' + [...stack, path].join(' -> '))
    const trail = [...stack, path]
    const result = validate(token.$value, token.$type, path, trail)
    cache.set(path, result); return result
  }
  function validate(value, type, path, stack) {
    const ref = reference(value)
    if (ref) {
      if (!tokens.has(ref)) fail(path, `referência inexistente: ${ref}`)
      if (tokens.get(ref).$type !== type) fail(path, `referência de tipo incompatível: ${ref}`)
      return resolve(ref, stack)
    }
    if (value && typeof value === 'object' && 'op' in value) {
      if (type !== 'dimension' || !['add', 'subtract', 'multiply'].includes(value.op)) fail(path, 'operação inválida')
      const left = validate(value.left, type, path, stack)
      if (value.op === 'multiply') {
        if (!finite(value.right)) fail(path, 'multiplicador inválido')
        return validate({ value: left.value * value.right, unit: left.unit }, type, path, stack)
      }
      const right = validate(value.right, type, path, stack)
      if (left.unit !== right.unit) fail(path, 'unidades incompatíveis')
      return validate({ value: left.value + (value.op === 'add' ? right.value : -right.value), unit: left.unit }, type, path, stack)
    }
    const dimension = v => validate(v, 'dimension', path, stack)
    const unit = allowed => value && finite(value.value) && allowed.includes(value.unit)
    switch (type) {
      case 'dimension': if (!unit(['px', 'rem'])) fail(path, 'dimensão inválida'); break
      case 'duration': if (!unit(['s', 'ms']) || value.value < 0) fail(path, 'duração inválida'); break
      case 'number': if (!finite(value)) fail(path, 'número inválido'); break
      case 'fontWeight': if (!finite(value) || value < 1 || value > 1000) fail(path, 'peso inválido'); break
      case 'fontFamily': if (!Array.isArray(value) || !value.length || value.some(v => typeof v !== 'string' || !v.trim())) fail(path, 'família de fonte inválida'); break
      case 'strokeStyle': if (!['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'outset', 'inset'].includes(value)) fail(path, 'estilo de borda inválido'); break
      case 'cubicBezier': if (!Array.isArray(value) || value.length !== 4 || !value.every(finite) || [value[0], value[2]].some(v => v < 0 || v > 1)) fail(path, 'curva inválida'); break
      case 'color':
        if (!value || value.colorSpace !== 'srgb' || !Array.isArray(value.components) || value.components.length !== 3 || value.components.some(v => !finite(v) || v < 0 || v > 1) || !finite(value.alpha) || value.alpha < 0 || value.alpha > 1) fail(path, 'cor sRGB inválida')
        break
      case 'shadow': {
        if (!value || Array.isArray(value)) fail(path, 'esperado objeto shadow')
        const shadow = { color: validate(value.color, 'color', path, stack) }
        for (const key of ['offsetX', 'offsetY', 'blur', 'spread']) shadow[key] = dimension(value[key])
        if (shadow.blur.value < 0) fail(path, 'blur negativo')
        return shadow
      }
      case 'transition':
        return { duration: validate(value?.duration, 'duration', path, stack), delay: validate(value?.delay, 'duration', path, stack), timingFunction: validate(value?.timingFunction, 'cubicBezier', path, stack) }
      default: fail(path, `tipo não suportado pelo gerador: ${type}`)
    }
    return value
  }
  for (const path of tokens.keys()) resolve(path)
  function serialize(path, runtime = false) {
    const token = tokens.get(path)
    if (!token) fail(path, 'token inexistente')
    if (runtime && token.$value?.op) {
      const operand = value => reference(value) ? `var(--${cssName(reference(value))})` : typeof value === 'number' ? String(value) : `${value.value}${value.unit}`
      return `calc(${operand(token.$value.left)} ${{ add: '+', subtract: '-', multiply: '*' }[token.$value.op]} ${operand(token.$value.right)})`
    }
    const ref = reference(token.$value)
    if (ref) return runtime ? `var(--${cssName(ref)})` : serialize(ref)
    const v = resolve(path), ext = token.$extensions[namespace]
    const field = (value, type) => { const ref = reference(value); return ref ? (runtime ? `var(--${cssName(ref)})` : serialize(ref)) : format(value, type, {}) }
    if (token.$type === 'shadow') {
      const raw = token.$value
      return [field(raw.offsetX, 'dimension'), field(raw.offsetY, 'dimension'), field(raw.blur, 'dimension'), ...(ext.omitZeroSpread ? [] : [field(raw.spread, 'dimension')]), field(raw.color, 'color')].join(' ')
    }
    if (token.$type === 'transition') return `${ext.webProperty ?? 'all'} ${field(token.$value.duration, 'duration')} ${field(token.$value.timingFunction, 'cubicBezier')}${v.delay.value ? ' ' + field(token.$value.delay, 'duration') : ''}`
    return format(v, token.$type, ext)
  }
  function format(v, type, ext) {
    if (type === 'dimension' || type === 'duration') return `${v.value}${v.unit}`
    if (type === 'color') {
      const rgb = v.components.map(c => Math.round(c * 255))
      return v.alpha === 1 ? '#' + rgb.map(c => c.toString(16).padStart(2, '0')).join('') : `rgba(${rgb.join(', ')}, ${v.alpha})`
    }
    if (type === 'fontFamily') return v.map(n => /\s/.test(n) ? `'${n}'` : n).join(', ')
    if (type === 'cubicBezier') return ext.webKeyword ?? `cubic-bezier(${v.join(', ')})`
    if (ext.webFormat === 'percentage') return `${v * 100}%`
    return String(v)
  }
  function expression(text, runtime = true) {
    return text.replace(/\{([^{}]+)\}/g, (_, path) => runtime ? `var(--${cssName(path)})` : serialize(path))
  }
  const web = source.$extensions?.[namespace]?.web ?? { recipes: {}, highContrast: [] }
  for (const [name, recipe] of Object.entries(web.recipes)) {
    if (recipe.format !== 'rgb' || tokens.get(recipe.token)?.$type !== 'color') fail(name, 'receita RGB inválida')
    if (names.has(name)) fail(name, 'nome de receita duplicado')
  }
  for (const block of web.highContrast) for (const declaration of block.declarations) {
    for (const m of declaration.value.matchAll(/\{([^{}]+)\}/g)) if (!tokens.has(m[1])) fail(declaration.name, 'referência de contraste inexistente: ' + m[1])
  }
  return { tokens, resolve, serialize, expression, web }
}

export const readModel = path => createModel(JSON.parse(readFileSync(path, 'utf8')))
