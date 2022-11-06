/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: ['./scripts/**/*']
  },
  plugins: [Unocss(), vue()],
  resolve: {
    alias: {
      '@': './src'
    }
  }
});
