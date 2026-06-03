import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { posix, resolve } from 'node:path'

function injectLibraryCssImports() {
  return {
    name: 'inject-library-css-imports',
    apply: 'build' as const,
    enforce: 'post' as const,
    generateBundle(_: unknown, bundle: Record<string, { type: string; fileName: string; code?: string; viteMetadata?: { importedCss?: Set<string> } }>) {
      for (const output of Object.values(bundle)) {
        if (output.type !== 'chunk' || typeof output.code !== 'string') {
          continue
        }

        if (!output.fileName.endsWith('.js')) {
          continue
        }

        const importedCss = output.viteMetadata?.importedCss ? Array.from(output.viteMetadata.importedCss) : []

        if (importedCss.length === 0) {
          continue
        }

        const cssPrelude = importedCss
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
  plugins: [react(), injectLibraryCssImports()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        foundation: resolve(__dirname, 'src/foundation.ts'),
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