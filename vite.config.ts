import { defineConfig } from 'vitest/config' // se configuró esta linea para que pueda detectar test
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
