import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import staticPlugin from 'vite-plugin-static';


export default defineConfig({
  plugins: [react(),staticPlugin()],
  base: '/hava-solomon', // Change to match your GitHub repository name
  server: {
    port: 5174,
    host: '0.0.0.0',
    open: false
  }
});
