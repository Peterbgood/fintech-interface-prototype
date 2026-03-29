import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // Import the PostCSS plugin

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // This ensures Tailwind runs during the GitHub 'Build' step
      ],
    },
  },
  base: '/fintech-interface-prototype/',
})