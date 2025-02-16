/**
 * Project Structure Reference:
 * /
 * ├── src/              # Application source
 * │   ├── test/         # Test configuration
 * │   │   ├── setup.ts  # Test setup
 * │   │   └── utils.ts  # Test utilities
 * │   └── [app files]   # Application files
 * └── vitest.config.ts  # [current] Test configuration
 */

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@data': path.resolve(__dirname, './src/data'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  }
})
