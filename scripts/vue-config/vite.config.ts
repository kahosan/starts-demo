import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';

export default defineConfig({
  plugins: [Unocss(), vue()],
  resolve: {
    alias: {
      '@': './src'
    }
  }
});
