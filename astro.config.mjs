import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import remarkPlugin from './remark-asset-paths.js';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkPlugin]
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
