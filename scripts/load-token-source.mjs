import ts from 'typescript'
import { createRequire } from 'node:module'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
export function loadTokenSource(entry) {
  const program = ts.createProgram([entry], { noEmit: true, strict: true, skipLibCheck: true, target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS })
  const diagnostics = ts.getPreEmitDiagnostics(program)
  if (diagnostics.length) throw new Error(ts.formatDiagnosticsWithColorAndContext(diagnostics, { getCanonicalFileName: f => f, getCurrentDirectory: () => process.cwd(), getNewLine: () => '\n' }))
  const cache = new Map()
  function load(file) {
    if (cache.has(file)) return cache.get(file).exports
    const source = readFileSync(file, 'utf8')
    const result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }, fileName: file, reportDiagnostics: true })
    const errors = result.diagnostics?.filter(d => d.category === ts.DiagnosticCategory.Error) ?? []
    if (errors.length) throw new Error(ts.formatDiagnosticsWithColorAndContext(errors, { getCanonicalFileName: f => f, getCurrentDirectory: () => process.cwd(), getNewLine: () => '\n' }))
    const module = { exports: {} }
    cache.set(file, module)
    const require = name => name.startsWith('.') ? load(resolve(dirname(file), name + '.ts')) : createRequire(file)(name)
    new Function('require', 'module', 'exports', result.outputText)(require, module, module.exports)
    return module.exports
  }
  return load(entry).default
}
