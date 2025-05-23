import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // πολύ σημαντικό!
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
