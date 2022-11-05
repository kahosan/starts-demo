import { defineConfig, presetUno } from 'unocss';
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({})
  ]
});
