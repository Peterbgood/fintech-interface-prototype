import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// We're removing the manual tailwind import to let PostCSS handle it automatically
export default defineConfig({
  plugins: [react()],
  base: '/fintech-interface-prototype/',
})