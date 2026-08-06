import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base: './' keeps built asset paths relative, so the site works correctly
// whether it's served from a GitHub Pages project page (username.github.io/repo/)
// or a custom domain / user page (username.github.io/).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
