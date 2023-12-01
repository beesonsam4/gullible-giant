import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://beesonsam4.github.io',
	base: '/gullible-giant',
	integrations: [mdx(), sitemap()],
});
