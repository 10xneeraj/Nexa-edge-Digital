import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite dev server hard restart trigger
export default defineConfig({
  plugins: [react()],
  base: '/Nexa-edge-Digital/',
})
