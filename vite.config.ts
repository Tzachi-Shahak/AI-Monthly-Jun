import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  publicDir: path.resolve(__dirname, '../AI_Monthly_May/public'),
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
