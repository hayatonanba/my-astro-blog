import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://nababa-diary.hayatonanba.workers.dev',
	integrations: [mdx(), sitemap()],

	vite: {
		plugins: [tailwindcss()],
	},
});
