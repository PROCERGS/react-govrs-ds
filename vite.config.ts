import { cpSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, extname, join, posix, relative, resolve } from 'node:path'

const COMPONENT_ASSET_EXTENSIONS = new Set(['.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif'])
const ASSET_URL_MODULE_PATTERN = /\.(?:svg|png|jpe?g|webp|gif)\.(?:js|cjs)$/

function isAssetUrlModule(fileName: string): boolean {
  return ASSET_URL_MODULE_PATTERN.test(fileName.replace(/\\/g, '/'))
}

function collectComponentAssetFiles(componentsDir: string, currentDir = componentsDir): string[] {
  const assetFiles: string[] = []

  for (const entry of readdirSync(currentDir)) {
    const entryPath = join(currentDir, entry)

    if (statSync(entryPath).isDirectory()) {
      assetFiles.push(...collectComponentAssetFiles(componentsDir, entryPath))
      continue
    }

    if (COMPONENT_ASSET_EXTENSIONS.has(extname(entry).toLowerCase())) {
      assetFiles.push(entryPath)
    }
  }

  return assetFiles
}

function injectLibraryCssImports() {
  return {
    name: 'inject-library-css-imports',
    apply: 'build' as const,
    enforce: 'post' as const,
    generateBundle(_: unknown, bundle: Record<string, { type: string; fileName: string; code?: string; viteMetadata?: { importedCss?: Set<string> } }>) {
      const runtimeTokensEntry = Object.values(bundle).find(
        (output) => output.type === 'chunk' && output.fileName === 'tokens.js',
      )
      const runtimeTokensCss = runtimeTokensEntry?.viteMetadata?.importedCss
        ? Array.from(runtimeTokensEntry.viteMetadata.importedCss)
        : []

      for (const output of Object.values(bundle)) {
        if (output.type !== 'chunk' || typeof output.code !== 'string') {
          continue
        }

        if (!output.fileName.endsWith('.js') || isAssetUrlModule(output.fileName)) {
          continue
        }

        const importedCss = output.viteMetadata?.importedCss ? Array.from(output.viteMetadata.importedCss) : []
        const needsRuntimeTokens = output.fileName.startsWith('components/')
          || output.fileName.startsWith('primitives/')
        const cssImports = [
          ...(needsRuntimeTokens ? runtimeTokensCss : []),
          ...importedCss,
        ]

        if (cssImports.length === 0) {
          continue
        }

        const cssPrelude = [...new Set(cssImports)]
          .map((cssFile) => {
            const relativePath = posix.relative(posix.dirname(output.fileName), cssFile)
            const importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`

            return `import ${JSON.stringify(importPath)};`
          })
          .join('\n')

        output.code = `${cssPrelude}\n${output.code}`
      }
    },
  }
}

function readDefaultExportUrl(moduleCode: string): string | null {
  const directDefaultExport = moduleCode.match(
    /(?:^|\n)\s*(?:export default|module\.exports\s*=)\s*("(?:[^"\\]|\\.)*")\s*;?/,
  )
  const namedDefaultExport = moduleCode.match(
    /const\s+([\w$]+)\s*=\s*("(?:[^"\\]|\\.)*")\s*;?\s*export\s*\{\s*\1\s+as\s+default\s*\}\s*;?/,
  )
  const namedCommonJsExport = moduleCode.match(
    /const\s+([\w$]+)\s*=\s*("(?:[^"\\]|\\.)*")\s*;?\s*module\.exports\s*=\s*\1\s*;?/,
  )
  const serializedValue =
    directDefaultExport?.[1] ?? namedDefaultExport?.[2] ?? namedCommonJsExport?.[2]

  if (!serializedValue) {
    return null
  }

  try {
    const value = JSON.parse(serializedValue)
    return typeof value === 'string' ? value : null
  } catch {
    return null
  }
}

function inlineLibraryAssetImports() {
  return {
    name: 'inline-library-asset-imports',
    apply: 'build' as const,
    enforce: 'post' as const,
    generateBundle(
      _: unknown,
      bundle: Record<string, { type: string; fileName: string; code?: string }>,
    ) {
      const chunkByFileName = new Map<string, { type: string; fileName: string; code?: string }>()
      const inlinedAssetModules = new Set<string>()
      const esmImportPattern = /import ([\w$]+) from (["'])(\.[^"']+\.(?:svg|png|jpe?g|webp|gif)\.js)\2;/g
      const cjsImportPattern = /([\w$]+)=require\((["'])(\.[^"']+\.(?:svg|png|jpe?g|webp|gif)\.cjs)\2\)/g

      for (const output of Object.values(bundle)) {
        chunkByFileName.set(output.fileName.replace(/\\/g, '/'), output)
      }

      for (const output of Object.values(bundle)) {
        if (output.type !== 'chunk' || typeof output.code !== 'string' || isAssetUrlModule(output.fileName)) {
          continue
        }

        let nextCode = output.code
        const importerDir = posix.dirname(output.fileName.replace(/\\/g, '/'))

        for (const match of output.code.matchAll(esmImportPattern)) {
          const [importStatement, binding, , importPath] = match
          const resolvedImportPath = posix.normalize(posix.join(importerDir, importPath))
          const assetModule = chunkByFileName.get(resolvedImportPath)

          if (!assetModule || typeof assetModule.code !== 'string') {
            continue
          }

          const assetUrl = readDefaultExportUrl(assetModule.code)
          if (!assetUrl) {
            continue
          }

          nextCode = nextCode.replace(importStatement, `const ${binding} = ${JSON.stringify(assetUrl)};`)
          inlinedAssetModules.add(resolvedImportPath)
        }

        for (const match of output.code.matchAll(cjsImportPattern)) {
          const [importStatement, binding, , importPath] = match
          const resolvedImportPath = posix.normalize(posix.join(importerDir, importPath))
          const assetModule = chunkByFileName.get(resolvedImportPath)

          if (!assetModule || typeof assetModule.code !== 'string') {
            continue
          }

          const assetUrl = readDefaultExportUrl(assetModule.code)
          if (!assetUrl) {
            continue
          }

          nextCode = nextCode.replace(importStatement, `${binding}=${JSON.stringify(assetUrl)}`)
          inlinedAssetModules.add(resolvedImportPath)
        }

        output.code = nextCode
      }

      for (const fileName of inlinedAssetModules) {
        delete bundle[fileName]
      }
    },
  }
}

function copyComponentAssets() {
  return {
    name: 'copy-component-assets',
    apply: 'build' as const,
    closeBundle() {
      const srcRoot = resolve(__dirname, 'src')
      const componentsDir = resolve(srcRoot, 'components')
      const distRoot = resolve(__dirname, 'dist')

      for (const assetPath of collectComponentAssetFiles(componentsDir)) {
        const distPath = resolve(distRoot, relative(srcRoot, assetPath))
        mkdirSync(dirname(distPath), { recursive: true })
        cpSync(assetPath, distPath)
      }
    },
  }
}

const isStorybookBuild = process.env.npm_lifecycle_event?.includes('storybook') === true

const externalDependencies = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  '@fortawesome/fontawesome-svg-core',
  '@fortawesome/free-solid-svg-icons',
  '@fortawesome/react-fontawesome',
  '@react-google-maps/api',
]

export default defineConfig({
  base: './',
  plugins: [
    react(),
    ...(isStorybookBuild ? [] : [injectLibraryCssImports(), inlineLibraryAssetImports(), copyComponentAssets()]),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        foundation: resolve(__dirname, 'src/foundation.ts'),
        tokens: resolve(__dirname, 'src/runtime-tokens.ts'),
      },
      name: 'ReactGovrsDS',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return format === 'es' ? 'react-govrs-ds.es.js' : 'react-govrs-ds.cjs'
        }

        if (entryName === 'foundation') {
          return format === 'es' ? 'foundation.js' : 'foundation.cjs'
        }

        if (entryName === 'tokens') {
          return format === 'es' ? 'tokens.js' : 'tokens.cjs'
        }

        return `${entryName}.${format === 'es' ? 'js' : 'cjs'}`
      },
    },
    rollupOptions: {
      external: externalDependencies,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})