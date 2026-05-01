import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://trellisframeworks.com',
  vite: {
    plugins: [tailwindcss()]
  }
});