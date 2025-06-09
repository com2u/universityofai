import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: [
      'university-of-ai.org',
      'school-of-ai.org',
      'university-of-ai.com2u.selfhost.eu'
    ]
  }
})
