import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@js', replacement: '/src/js' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@img', replacement: '/src/images' },
    ]
  }
});