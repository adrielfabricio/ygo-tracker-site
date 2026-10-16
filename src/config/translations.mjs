// @ts-check
/**
 * Pages that exist in both languages, as [pt-BR path, English path]. Single source for hreflang:
 * Base.astro emits the <link rel="alternate"> tags and astro.config.mjs writes the same pairs into
 * the sitemap. The pt-BR page is the x-default.
 */

/** The guides index, linked from the header and the footer. */
export const GUIDES_INDEX_PATHS = /** @type {const} */ ({
	'pt-br': '/guia',
	en: '/en/guide',
});

/**
 * Every guide as [pt-BR slug, English slug]. The Markdown lives at
 * src/content/guides/<locale>/<slug>.md; a guide must exist in both languages.
 *
 * @type {ReadonlyArray<readonly [string, string]>}
 */
export const GUIDE_SLUGS = [
	['como-organizar-colecao-yugioh', 'how-to-organize-yugioh-collection'],
	['planilha-colecao-yugioh', 'yugioh-collection-spreadsheet'],
	['quanto-custa-montar-deck-yugioh', 'how-much-does-a-yugioh-deck-cost'],
	['nomes-cartas-yugioh-portugues-ingles', 'yugioh-card-names-portuguese-english'],
];

/** @param {'pt-br' | 'en'} locale @param {string} slug */
export function guidePath(locale, slug) {
	return `${GUIDES_INDEX_PATHS[locale]}/${slug}`;
}

/** The collection guide, linked from the steps section. */
export const GUIDE_PATHS = /** @type {const} */ ({
	'pt-br': guidePath('pt-br', GUIDE_SLUGS[0][0]),
	en: guidePath('en', GUIDE_SLUGS[0][1]),
});

/** @type {ReadonlyArray<readonly [string, string]>} */
export const TRANSLATIONS = [
	['/', '/en'],
	[GUIDES_INDEX_PATHS['pt-br'], GUIDES_INDEX_PATHS.en],
	...GUIDE_SLUGS.map(([pt, en]) => /** @type {const} */ ([guidePath('pt-br', pt), guidePath('en', en)])),
];

/**
 * @param {string} path Clean path without `.html` or trailing slash ("/" for the home page).
 * @returns {{ 'pt-br': string; en: string } | undefined}
 */
export function translationsOf(path) {
	const pair = TRANSLATIONS.find((group) => group.includes(path));
	return pair && { 'pt-br': pair[0], en: pair[1] };
}
