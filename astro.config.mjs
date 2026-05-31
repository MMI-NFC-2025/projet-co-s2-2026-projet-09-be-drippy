// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/confignpm
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});