// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import { translationsOf } from './src/config/translations.mjs';

/**
 * Production origin. Canonical URLs, hreflang, Open Graph, robots.txt and the sitemap all derive
 * from it; wrangler.jsonc and ops/legal-redirect/ repeat the domain.
 */
const SITE = 'https://ygotracker.app';

export default defineConfig({
	site: SITE,
	// `/privacy`, `/terms` and `/support` are the URLs the app and the store listings already use.
	trailingSlash: 'never',
	build: { format: 'file' },
	// Astro 7 turned this off by default; keep the v6 whitespace compression.
	compressHTML: true,
	i18n: {
		locales: ['pt-br', 'en'],
		defaultLocale: 'pt-br',
		routing: { prefixDefaultLocale: false },
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Cinzel',
			cssVariable: '--font-cinzel',
			weights: [600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'serif'],
		},
	],
	integrations: [
		sitemap({
			filter: (page) => !page.endsWith('/download') && !page.endsWith('/404'),
			// Same pairs as the hreflang tags in Base.astro; pages without a translation get no alternates.
			serialize(item) {
				const path = new URL(item.url).pathname.replace(/(.)\/$/, '$1');
				const translations = translationsOf(path);
				if (translations) {
					item.links = [
						{ url: `${SITE}${translations['pt-br']}`, lang: 'pt-BR' },
						{ url: `${SITE}${translations.en}`, lang: 'en' },
						{ url: `${SITE}${translations['pt-br']}`, lang: 'x-default' },
					];
				}
				return item;
			},
		}),
	],
});
