import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // If you are using the v4 vite plugin

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/fintech-interface-prototype/', // This line is CRITICAL for GitHub Pages
})