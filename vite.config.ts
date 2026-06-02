import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

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
  plugins: [react()],
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