// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

/**
 * Production origin. Canonical URLs, hreflang, Open Graph and the sitemap all derive from it,
 * so change it here (and in public/robots.txt) when the domain is final.
 */
const SITE = 'https://ygotracker.app';

/** The only pages that exist in both languages; every other page is English-only legal text. */
const LANDING_URLS = new Set([`${SITE}/`, `${SITE}/en`]);

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
			i18n: {
				defaultLocale: 'pt-br',
				locales: { 'pt-br': 'pt-BR', en: 'en' },
			},
			serialize(item) {
				if (LANDING_URLS.has(item.url)) {
					item.links = [...(item.links ?? []), { url: `${SITE}/`, lang: 'x-default' }];
				} else {
					// The i18n option tags every unprefixed URL as pt-BR; the legal pages are English only.
					delete item.links;
				}
				return item;
			},
		}),
	],
});
