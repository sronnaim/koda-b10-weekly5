import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    include: /\.(mdx|js|jsx|ts|tsx)$/
  }), tailwindcss()],
  server: {
    watch: {
       usePolling: true
    }
  },
})
