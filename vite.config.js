import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/proctor_watchdog/",
  build: { chunkSizeWarningLimit: 1600,}
})
