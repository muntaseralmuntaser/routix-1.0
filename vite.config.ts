import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    cors: true,
    allowedHosts: ['5173-ips9x5tyekc9v0tt10vx9-c81df28e.sandbox.novita.ai', 'localhost'],
    hmr: {
      protocol: 'wss',
      clientPort: 443,
    }
  }
})
