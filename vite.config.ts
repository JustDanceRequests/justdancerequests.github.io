import path from 'path';
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@sass': path.resolve(__dirname, './sass'),
      },
    },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
  };
});
