import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Library build configuration
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        components: resolve(__dirname, 'src/components/index.ts'),
        tokens: resolve(__dirname, 'src/tokens/index.ts'),
        foundations: resolve(__dirname, 'src/foundations/index.ts'),
        primitives: resolve(__dirname, 'src/primitives/index.ts'),
        patterns: resolve(__dirname, 'src/patterns/index.ts'),
      },
      name: 'ReactGovrsDS',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return format === 'es' ? 'react-govrs-ds.es.js' : 'react-govrs-ds.cjs'
        }

        return `${entryName}.${format === 'es' ? 'js' : 'cjs'}`
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})