#!/usr/bin/env node
/**
 * Render the Open Graph images (1200×630, one per locale) into public/og/ with headless Chrome.
 * The output is committed; run again only when the text or the brand changes.
 *
 * Usage: npm run og:render
 * Override the browser with CHROME_PATH=/path/to/chrome.
 */
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public/og');
const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const asset = (path) => pathToFileURL(join(ROOT, path)).href;
const FONT_600 = asset('node_modules/@fontsource/cinzel/files/cinzel-latin-600-normal.woff2');
const FONT_700 = asset('node_modules/@fontsource/cinzel/files/cinzel-latin-700-normal.woff2');
const EYE = asset('src/assets/eye-glyph.png');

const LOCALES = {
	'pt-br': {
		lang: 'pt-BR',
		title: 'Organize sua coleção de Yu-Gi-Oh!',
		subtitle: 'Veja o que falta em cada deck e quanto custa fechar.',
		platforms: 'Grátis para iPhone e Android',
	},
	en: {
		lang: 'en',
		title: 'Organize your Yu-Gi-Oh! collection',
		subtitle: 'See what each deck still needs and what it will cost.',
		platforms: 'Free on iPhone and Android',
	},
};

// Keep the game's name on one line; the browser would otherwise break it at a hyphen.
const keepName = (text) => text.replace('Yu-Gi-Oh!', '<span class="nowrap">Yu-Gi-Oh!</span>');

function html({ lang, title, subtitle, platforms }) {
	return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<style>
	@font-face { font-family: Cinzel; font-weight: 600; src: url('${FONT_600}') format('woff2'); }
	@font-face { font-family: Cinzel; font-weight: 700; src: url('${FONT_700}') format('woff2'); }
	* { box-sizing: border-box; margin: 0; }
	html, body { width: 1200px; height: 630px; overflow: hidden; }
	body {
		display: flex;
		align-items: center;
		gap: 64px;
		padding: 0 96px;
		background:
			radial-gradient(ellipse 70% 80% at 22% 50%, rgba(227, 184, 75, 0.16), transparent 70%),
			linear-gradient(180deg, #1e190d 0%, #14110c 18%, #100e09 48%, #0d0b08 100%);
		color: #f3ede1;
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
	}
	body::after {
		content: '';
		position: absolute;
		inset: 24px;
		border: 1px solid rgba(227, 184, 75, 0.2);
		border-radius: 28px;
	}
	img { width: 260px; height: 260px; flex: none; filter: drop-shadow(0 0 40px rgba(227, 184, 75, 0.25)); }
	.copy { display: grid; gap: 22px; }
	.brand { color: #e3b84b; font-family: Cinzel; font-weight: 700; font-size: 30px; letter-spacing: 0.22em; }
	h1 { font-family: Cinzel; font-weight: 700; font-size: 56px; line-height: 1.12; }
	.nowrap { white-space: nowrap; }
	p { color: rgba(243, 237, 225, 0.7); font-size: 28px; line-height: 1.35; }
	.chip {
		justify-self: start;
		margin-top: 8px;
		padding: 10px 22px;
		border-radius: 999px;
		background: linear-gradient(150deg, #e3b84b 15%, #b0862c 85%);
		color: #181307;
		font-size: 22px;
		font-weight: 700;
	}
</style>
</head>
<body>
	<img src="${EYE}" alt="" />
	<div class="copy">
		<div class="brand">YGO TRACKER</div>
		<h1>${keepName(title)}</h1>
		<p>${subtitle}</p>
		<div class="chip">${platforms}</div>
	</div>
</body>
</html>`;
}

mkdirSync(OUT, { recursive: true });
const work = mkdtempSync(join(tmpdir(), 'ygo-og-'));
try {
	for (const [locale, text] of Object.entries(LOCALES)) {
		const page = join(work, `${locale}.html`);
		const png = join(OUT, `og-${locale}.png`);
		writeFileSync(page, html(text));
		const result = spawnSync(
			CHROME,
			[
				'--headless=new',
				'--disable-gpu',
				'--hide-scrollbars',
				'--allow-file-access-from-files',
				'--force-device-scale-factor=1',
				'--window-size=1200,630',
				'--virtual-time-budget=2000',
				`--screenshot=${png}`,
				pathToFileURL(page).href,
			],
			{ stdio: 'inherit' },
		);
		if (result.status !== 0) throw new Error(`Chrome exited with ${result.status} for ${locale}`);
		console.log(`wrote ${png}`);
	}
} finally {
	rmSync(work, { recursive: true, force: true });
}
