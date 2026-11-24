import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

// Deploy under a subpath (GitHub Pages: GH_PAGES_BASE=cma-compass) or at root
// (local/dev). Read WITHOUT a leading slash so no shell mangles it.
const rawBase = process.env.GH_PAGES_BASE || '';
const base = rawBase ? `/${rawBase.replace(/^\/+|\/+$/g, '')}/` : '/';

export default defineConfig({
  base,
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@screens': '/src/screens',
      '@lib': '/src/lib',
      '@data': '/src/data',
      '@store': '/src/store',
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 2000,
  },
})
