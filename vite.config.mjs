import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/svg-mask-icon.js'),
      name: 'SvgMaskIcon',
      fileName: () => 'svg-mask-icon.js',
      formats: ['es']
    },
    rollupOptions: {
      // external: ['lit']
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: true
  }
});
