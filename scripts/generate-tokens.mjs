import { loadTokenSource } from './load-token-source.mjs'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { createModel, cssName } from './token-model.mjs'

const root = fileURLToPath(new URL('../', import.meta.url))
const source = loadTokenSource(resolve(root, 'src/tokens/source.ts'))
const model = createModel(source)
const check = process.argv.includes('--check')
const banner = '// Gerado de src/tokens/*.ts. Não editar.\n'
function output(path, contents) {
  contents = contents.replaceAll('\r\n', '\n')
  const file = resolve(root, path)
  const current = existsSync(file) ? readFileSync(file, 'utf8').replaceAll('\r\n', '\n') : undefined
  if (check) {
    if (current !== contents) throw new Error(`Arquivo desatualizado: ${path}`)
  } else if (current !== contents) writeFileSync(file, contents)
}
const families = new Map([...model.tokens.keys()].map(path => [path.split('.')[0], true]))
const declarations = [...families.keys()].map(family => `  /* ${family} */\n` + [...model.tokens.keys()].filter(path => path.startsWith(family + '.')).map(path => `  --${cssName(path)}: ${model.serialize(path, true)};`).join('\n')).join('\n\n')
const recipes = Object.entries(model.web.recipes).map(([name, recipe]) => `  --${name}: ${model.resolve(recipe.token).components.map(c => Math.round(c * 255)).join(', ')};`).join('\n')
output('src/foundations/styles/_variables.scss', banner + "\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');\n\n:root {\n" + declarations + '\n\n  /* Serialização web derivada */\n' + recipes + '\n}\n')
output('src/foundations/styles/_sass-variables.scss', banner + [...model.tokens.keys()].map(path => `$${cssName(path)}: ${model.serialize(path)};`).join('\n') + '\n')
output('src/foundations/styles/_contrast-tokens.scss', banner + model.web.highContrast.map(block => `${block.selector} {\n${block.declarations.map(({ name, value }) => `  --${name}: ${model.expression(value)};`).join('\n')}\n}`).join('\n\n') + '\n')
console.log(check ? 'Tokens sincronizados.' : 'Tokens gerados.')
