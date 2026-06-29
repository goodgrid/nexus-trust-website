import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // During `npm run dev`, forward /api to the Express server (`npm run dev:server`).
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
