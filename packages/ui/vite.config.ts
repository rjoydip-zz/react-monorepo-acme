import path from 'node:path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '../test.setup.ts',
    exclude: [
      ...configDefaults.exclude,
      '**/build/**',
      '**/coverage/**',
      '**/example/**'
    ],
    include: ['**/tests/*.{js,tsx,ts}'],
    coverage: {
      reporter: ['text', 'json', 'html']
    },
    snapshotFormat: {
      printBasicPrototype: true
    }
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'UI',
      formats: ['es', 'umd'],
      fileName: (format) => `ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
