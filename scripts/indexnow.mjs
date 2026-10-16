#!/usr/bin/env node
/**
 * Tell IndexNow search engines (Bing, Yandex, Seznam, Naver and others) that the site changed, so
 * they recrawl without waiting. Submits every URL in the built sitemap; run it after a deploy.
 * The key is the 32-hex-character file in public/, served at the site root as the ownership proof.
 *
 * Usage: npm run build && npm run seo:indexnow
 * Exits 0 on a failed submission: a ping must never fail a deploy.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const keyFile = readdirSync(join(ROOT, 'public')).find((name) => /^[a-f0-9]{32}\.txt$/.test(name));
if (!keyFile) {
	console.error('IndexNow: no key file (32 hex characters + .txt) in public/');
	process.exit(1);
}
const key = keyFile.slice(0, -'.txt'.length);

const sitemap = readFileSync(join(ROOT, 'dist/sitemap-0.xml'), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (urlList.length === 0) {
	console.error('IndexNow: dist/sitemap-0.xml has no URLs; run the build first');
	process.exit(1);
}
const host = new URL(urlList[0]).host;

try {
	const response = await fetch(ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		body: JSON.stringify({ host, key, keyLocation: `https://${host}/${keyFile}`, urlList }),
	});
	// 200 and 202 both mean accepted; anything else is logged and ignored.
	console.log(`IndexNow: ${response.status} ${response.statusText} for ${urlList.length} URLs`);
} catch (error) {
	console.warn(`IndexNow: request failed (${error instanceof Error ? error.message : error})`);
}
