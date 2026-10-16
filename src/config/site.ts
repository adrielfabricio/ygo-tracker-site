import type { Locale } from '../i18n/locales';

export const APP_NAME = 'YGO Tracker';
export const AUTHOR = 'Adriel Fabrício';
export const SUPPORT_EMAIL = 'adrielfabricio.dev@gmail.com';

/** `ascAppId` in ygo-tracker/eas.json. */
export const APP_STORE_ID = '6800737945';
/** `android.package` in ygo-tracker/app.config.js. */
export const PLAY_PACKAGE = 'com.ygotracker';
/** Plain store listing URLs (no campaign parameters), for structured data. */
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}`;

/** schema.org `applicationCategory`. Keep it in line with the primary App Store category (Reference). */
export const APP_CATEGORY = 'ReferenceApplication';

/**
 * App Store Connect → App Analytics → Campaign generator. With it, store clicks from this site show
 * up under Sources in App Analytics. Leave empty to link without campaign parameters.
 */
export const APPLE_PROVIDER_TOKEN = '';

/** Mirrors FREE_TIER_LIMITS in ygo-tracker/src/global/constants/premium.ts. Change both together. */
export const FREE_LIMITS = {
	activeDecks: 1,
	wishlistItems: 25,
	collections: 2,
} as const;

/** Where on the site a store link sits, e.g. `hero` or `final`; reported as the campaign name. */
export type Placement = 'hero' | 'final' | 'download' | 'guide';

const campaign = (locale: Locale, placement: Placement) => `site-${locale}-${placement}`;

export function appStoreUrl(locale: Locale, placement: Placement): string {
	// No storefront segment: Apple sends each visitor to the store of their own Apple ID.
	const url = new URL(APP_STORE_URL);
	if (APPLE_PROVIDER_TOKEN) {
		url.searchParams.set('pt', APPLE_PROVIDER_TOKEN);
		url.searchParams.set('ct', campaign(locale, placement));
		url.searchParams.set('mt', '8');
	}
	return url.toString();
}

export function playStoreUrl(locale: Locale, placement: Placement): string {
	const url = new URL(PLAY_STORE_URL);
	url.searchParams.set('hl', locale === 'pt-br' ? 'pt_BR' : 'en');
	// Install referrer, reported in Play Console → Acquisition.
	url.searchParams.set('referrer', `utm_source=ygotracker-site&utm_medium=web&utm_campaign=${campaign(locale, placement)}`);
	return url.toString();
}
