export const LOCALES = ['pt-br', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

type LocaleMeta = {
	/** BCP 47 tag for `<html lang>` and `hreflang`. */
	htmlLang: string;
	/** `og:locale` value. */
	ogLocale: string;
	/** Path of the landing page in this locale. */
	home: string;
	/** Name of the language written in itself, for the language switcher. */
	nativeName: string;
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
	'pt-br': { htmlLang: 'pt-BR', ogLocale: 'pt_BR', home: '/', nativeName: 'Português' },
	en: { htmlLang: 'en', ogLocale: 'en_US', home: '/en', nativeName: 'English' },
};
