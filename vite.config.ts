import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        assetFileNames: (assetInfo) => {
          let extType = (assetInfo.name && assetInfo.name.split('.').at(-1)) || '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return '[name]-[hash][extname]';
        },
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
})
