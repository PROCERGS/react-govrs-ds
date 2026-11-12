type Reference = `{${string}}`;
export const ref = (path: string): Reference => `{${path}}`;
export type Operation = {
    op: 'add' | 'subtract' | 'multiply';
    left: Reference;
    right: Reference | number | {
        value: number;
        unit: 'px' | 'rem';
    };
};
export const multiply = (left: Reference, right: number): Operation => ({ op: 'multiply', left, right });
export const add = (left: Reference, right: Operation['right']): Operation => ({ op: 'add', left, right });
export const subtract = (left: Reference, right: Operation['right']): Operation => ({ op: 'subtract', left, right });
type Options = {
    role: 'base' | 'semantic' | 'component';
    webFormat?: string;
    webKeyword?: string;
    webProperty?: string;
    omitZeroSpread?: boolean;
};
export const dimension = (value: `${number}rem` | `${number}px` | {
    value: number;
    unit: 'px' | 'rem';
} | Operation | Reference, description: string, options: Options) => ({ $type: 'dimension' as const, $value: typeof value === 'string' && !value.startsWith('{') ? { value: Number.parseFloat(value), unit: value.endsWith('rem') ? 'rem' : 'px' } : value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
export const duration = (value: {
    value: number;
    unit: 's' | 'ms';
} | Reference, description: string, options: Options) => ({ $type: 'duration' as const, $value: value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
export const color = (value: `#${string}` | {
    colorSpace: 'srgb';
    components: number[];
    alpha: number;
    hex?: string;
} | Reference, description: string, options: Options) => ({ $type: 'color' as const, $value: typeof value === 'string' && value.startsWith('#') ? parseColor(value) : value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
export const numeric = <const O extends Options>(value: number | Reference, description: string, options: O) => ({ $type: 'number' as const, $value: value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
export const fontWeight = (value: number | Reference, description: string, options: Options) => ({ $type: 'fontWeight' as const, $value: value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
export const fontFamily = (value: string[] | Reference, description: string, options: Options) => ({ $type: 'fontFamily' as const, $value: value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
export const strokeStyle = (value: string | Reference, description: string, options: Options) => ({ $type: 'strokeStyle' as const, $value: value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
export const cubicBezier = (value: number[] | Reference, description: string, options: Options) => ({ $type: 'cubicBezier' as const, $value: value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
export const shadow = (value: Record<string, unknown> | Reference, description: string, options: Options) => ({ $type: 'shadow' as const, $value: value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
export const transition = (value: Record<string, unknown> | Reference, description: string, options: Options) => ({ $type: 'transition' as const, $value: value, $description: description, $extensions: { 'br.gov.rs.procergs': options } });
function parseColor(value: string) {
    if (!/^#[0-9a-f]{6}$/i.test(value))
        throw new Error('Cor inválida: ' + value);
    return { colorSpace: 'srgb', components: [1, 3, 5].map(i => parseInt(value.slice(i, i + 2), 16) / 255), alpha: 1 };
}

/** Valores públicos resolvidos; as definições permanecem disponíveis ao gerador. */
type PublicTokens<T> = T extends { $extensions: { 'br.gov.rs.procergs': { webFormat: 'percentage' } } } ? string
    : T extends { $type: infer K } ? K extends 'number' | 'fontWeight' ? number : string
    : T extends object ? Exclude<keyof T, `$${string}`> extends `${number}` ? string[]
    : { readonly [P in keyof T as P extends `$${string}` ? never : P]: PublicTokens<T[P]> } : never;
type Data = Record<string, unknown>;
export function resolveFamily<T extends object>(family: string, definitions: T): PublicTokens<T> {
    const tokens = new Map<string, Data>();
    const cache = new Map<string, unknown>();
    function collect(node: Data, path: string) {
        if ('$value' in node) { tokens.set(path, node); return; }
        for (const [key, value] of Object.entries(node)) if (!key.startsWith('$')) collect(value as Data, path + '.' + key);
    }
    collect(definitions as Data, family);
    const reference = (value: unknown) => typeof value === 'string' ? /^\{([^{}]+)\}$/.exec(value)?.[1] : undefined;
    function value(raw: unknown, stack: string[]): unknown {
        const ref = reference(raw);
        if (ref) return resolved(ref, stack);
        if (raw && typeof raw === 'object') {
            const v = raw as Data;
            if ('op' in v) {
                const left = value(v.left, stack) as { value: number; unit: string };
                const right = value(v.right, stack);
                if (v.op === 'multiply' && typeof right === 'number' && Number.isFinite(right)) return { value: left.value * right, unit: left.unit };
                if (!['add', 'subtract'].includes(String(v.op)) || !right || typeof right !== 'object' || (right as Data).unit !== left.unit) throw new Error('Operação inválida: ' + stack.join(' -> '));
                return { value: left.value + (v.op === 'add' ? 1 : -1) * Number((right as Data).value), unit: left.unit };
            }
        }
        return raw;
    }
    function resolved(path: string, stack: string[]): unknown {
        if (cache.has(path)) return cache.get(path);
        const token = tokens.get(path);
        if (!token || stack.includes(path)) throw new Error('Referência inválida: ' + [...stack, path].join(' -> '));
        const ref = reference(token.$value);
        if (ref && tokens.get(ref)?.$type !== token.$type) throw new Error('Tipo incompatível: ' + path);
        const result = value(token.$value, [...stack, path]);
        cache.set(path, result);
        return result;
    }
    function format(raw: unknown, type: string, options: Data = {}, stack: string[] = []): string {
        const ref = reference(raw);
        if (ref) return serialize(ref, stack);
        const v = value(raw, stack);
        const obj = v as Data;
        if (type === 'dimension' || type === 'duration') return String(obj.value) + String(obj.unit);
        if (type === 'color') {
            const rgb = (obj.components as number[]).map(c => Math.round(c * 255));
            return obj.alpha === 1 ? '#' + rgb.map(c => c.toString(16).padStart(2, '0')).join('') : 'rgba(' + rgb.join(', ') + ', ' + obj.alpha + ')';
        }
        if (type === 'fontFamily') return (v as string[]).map(n => /\s/.test(n) ? "'" + n + "'" : n).join(', ');
        if (type === 'cubicBezier') return String(options.webKeyword ?? 'cubic-bezier(' + (v as number[]).join(', ') + ')');
        if (type === 'shadow') return [format(obj.offsetX, 'dimension'), format(obj.offsetY, 'dimension'), format(obj.blur, 'dimension'), ...(options.omitZeroSpread ? [] : [format(obj.spread, 'dimension')]), format(obj.color, 'color')].join(' ');
        if (type === 'transition') {
            const delay = value(obj.delay, stack) as Data;
            return String(options.webProperty ?? 'all') + ' ' + format(obj.duration, 'duration') + ' ' + format(obj.timingFunction, 'cubicBezier') + (delay.value ? ' ' + format(obj.delay, 'duration') : '');
        }
        return options.webFormat === 'percentage' ? String(Number(v) * 100) + '%' : String(v);
    }
    function serialize(path: string, stack: string[] = []): string {
        const token = tokens.get(path);
        if (!token || stack.includes(path)) throw new Error('Referência inválida: ' + path);
        resolved(path, stack);
        return format(token.$value, String(token.$type), (token.$extensions as Data)['br.gov.rs.procergs'] as Data, [...stack, path]);
    }
    function output(node: Data, path: string): unknown {
        if ('$value' in node) {
            const options = (node.$extensions as Data)['br.gov.rs.procergs'] as Data;
            return ['number', 'fontWeight'].includes(String(node.$type)) && options.webFormat !== 'percentage' ? resolved(path, []) : serialize(path);
        }
        const entries = Object.entries(node).filter(([key]) => !key.startsWith('$'));
        return entries.length && entries.every(([key], i) => key === String(i)) ? entries.map(([key, child]) => output(child as Data, path + '.' + key)) : Object.fromEntries(entries.map(([key, child]) => [key, output(child as Data, path + '.' + key)]));
    }
    return output(definitions as Data, family) as PublicTokens<T>;
}
