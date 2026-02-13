import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Since images are in the root directory along with index.html, 
  // we set publicDir to '.' so they are included in the build output.
  publicDir: './',
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  build: {
    // Standard Vite build settings for Vercel
    outDir: 'dist',
    emptyOutDir: true,
    // Ensure that assets in the root (like .jpg) aren't ignored
    assetsInlineLimit: 0 
  },
  server: {
    // Local dev settings
    historyApiFallback: true,
  }
});