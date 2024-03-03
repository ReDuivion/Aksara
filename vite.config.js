import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
        /* other options */
      },
      manifest: {
        name: 'Aksara Sunda',
        short_name: 'Aksara Sunda',
        description: 'Diajar Aksara Sunda',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/sunda.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icons/sunda.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icons/sunda.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any maskable",
          },
       
          {
            src: 'icons/sunda.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "any maskable",
          }
        ],
        display: "standalone",
        scope: "/",
        start_url:"/",
        
      }
    })
  ],
})
