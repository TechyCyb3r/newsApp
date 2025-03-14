import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts: '0.tcp.in.ngrok.io',
  }, 
  define:{
    'process.env.VITE_KEY':JSON.stringify(process.env.VITE_KEY)
  }
})
