import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@chirag01/medium-common'],
    },
  },
});

