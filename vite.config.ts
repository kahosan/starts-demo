import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';

export default defineConfig({
  plugins: [Unocss(), react()],
  resolve: {
    alias: {
      '@': './src'
    }
  }
});
