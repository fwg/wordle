import { defineConfig } from 'vite';
import { resolve } from 'path';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { version } from "./package.json";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    svelte({ preprocess: vitePreprocess() }), 
    viteCompression(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        not_found: resolve(__dirname, '404.html'),
      },
      output: {
        assetFileNames: `[name]-v${version}.[ext]`,
        entryFileNames: `[name]-v${version}.js`,
        dir: "./dist",
      }
    }
  }
});
