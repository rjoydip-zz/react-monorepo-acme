import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'http://127.0.0.1:5173/',
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}',
    video: false
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
})
