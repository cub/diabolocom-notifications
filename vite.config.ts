import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        format: 'es',
        manualChunks: {
          'vendor-vue': ['vue'],
          'vendor-pinia': ['pinia'],
          'notifications-widget-unread': ['@/components/notifications-widget-unread.vue'],
          'notifications-form-add': ['@/components/notifications-form-add.vue'],
          'notifications-list-manage': ['@/components/notifications-list-manage.vue'],
        },
      },
    },
  },
})
