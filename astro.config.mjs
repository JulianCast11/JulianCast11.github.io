// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://juliancast11.github.io',
  base: 'juliancast11.github.io',
  integrations: [tailwind()],
});