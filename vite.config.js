import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const PREFIX_ENV_VALUE = ['MARVEL', 'VITE'];

export default defineConfig({
  envDir: './env',
  envPrefix: PREFIX_ENV_VALUE,
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
})
