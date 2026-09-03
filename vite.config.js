import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: './',
  server: {
    port: 3000,
    host: true,
    open: false,
    watch: {
      ignored: ['**/matlab_animation/**', '**/*.mp4', '**/*.mp3']
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
