// @ts-check
/**
 * Pages that exist in both languages, as [pt-BR path, English path]. Single source for hreflang:
 * Base.astro emits the <link rel="alternate"> tags and astro.config.mjs writes the same pairs into
 * the sitemap. The pt-BR page is the x-default.
 *
 * @type {ReadonlyArray<readonly [string, string]>}
 */
/** The collection guide, linked from the header, the steps section and the footer. */
export const GUIDE_PATHS = /** @type {const} */ ({
	'pt-br': '/guia/como-organizar-colecao-yugioh',
	en: '/en/guide/how-to-organize-yugioh-collection',
});

export const TRANSLATIONS = [
	['/', '/en'],
	[GUIDE_PATHS['pt-br'], GUIDE_PATHS.en],
];

/**
 * @param {string} path Clean path without `.html` or trailing slash ("/" for the home page).
 * @returns {{ 'pt-br': string; en: string } | undefined}
 */
export function translationsOf(path) {
	const pair = TRANSLATIONS.find((group) => group.includes(path));
	return pair && { 'pt-br': pair[0], en: pair[1] };
}
