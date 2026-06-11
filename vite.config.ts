import { defineConfig } from 'vite'
import path from 'path'

const themeDir = path.resolve(__dirname, 'node_modules/slidev-theme-tzachi-kaltura')

export default defineConfig({
  publicDir: path.resolve(__dirname, 'Tzachi-Kaltura/public'),
  resolve: {
    alias: [
      // Fix Vite Windows bug: absolute C:/ paths inside virtual modules get mangled
      // into relative paths like ../Users/.../C:/Users/... — remap them back
      {
        find: /.*\/C:\/Users\/noy\.sabbag\/AI\/AI-Monthly-Jun\/node_modules\/slidev-theme-tzachi-kaltura(.*)/,
        replacement: (_, rest) => path.join(themeDir, rest),
      },
    ],
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
