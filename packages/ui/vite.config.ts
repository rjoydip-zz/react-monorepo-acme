import react from '@vitejs/plugin-react'
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
  plugins: [react()]
})
