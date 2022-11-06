/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: ['./scripts/**/*']
  },
  plugins: [Unocss(), react()],
  resolve: {
    alias: {
      '@': './src'
    }
  }
});
