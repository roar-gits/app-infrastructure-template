/**
 * Project Structure Reference:
 * /
 * ├── src/           # Application source code
 * │   ├── core/      # Business logic layer
 * │   ├── data/     # Data management layer
 * │   ├── ui/       # Presentation layer
 * │   └── [others]  # Other application layers
 * ├── public/        # Static assets
 * └── [config]      # Configuration files
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@core', replacement: path.resolve(__dirname, 'src/core') },
      { find: '@data', replacement: path.resolve(__dirname, 'src/data') },
      { find: '@ui', replacement: path.resolve(__dirname, 'src/ui') },
      { find: '@app', replacement: path.resolve(__dirname, 'src/app') }
    ]
  }
})
