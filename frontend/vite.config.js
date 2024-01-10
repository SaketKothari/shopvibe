import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy requests prefixed '/api'
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
});
