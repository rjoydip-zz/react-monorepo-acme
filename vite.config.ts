/// <reference types="vitest" />
/// <reference types="vite/client" />

import { configDefaults, defineConfig } from 'vitest/config'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test.setup.ts',
    exclude: [
      ...configDefaults.exclude,
      '**/build/**',
      '**/coverage/**',
      '**/example/**'
    ],
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
})
