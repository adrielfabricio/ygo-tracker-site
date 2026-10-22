# AGENTS.md

Static Astro site for YGO Tracker: a bilingual landing page (pt-BR at `/`, English at `/en`), the app's legal pages and its password-reset landing page plus app-link association files, served by Cloudflare as a static-assets Worker (`wrangler.jsonc`) at https://ygotracker.app. See `README.md` for the route map and deploy setup.

## Commands

```bash
npm run dev            # dev server
npm run build          # must pass before declaring a change done
npm run check          # astro check, 0 errors expected
npm run format:check   # prettier (tabs, single quotes, printWidth 140)
npx wrangler dev               # Cloudflare routing, _headers, redirects (after build)
npm run deploy                # build + wrangler deploy to ygotracker.app
```

## Rules

- **Almost no client JavaScript.** Three inline scripts exist: reveal-on-scroll plus the card spotlight in `src/layouts/Base.astro` (under 1 KB), the store redirect on `/download`, and the reset page's handoff in `src/components/ResetPasswordPage.astro` (it copies the query string into the `ygotracker://` button; only script can). Prefer CSS (`@property`, `<details>`, scroll timelines) before adding JS.
- **Motion is decoration, never content.** Anything hidden for a reveal (`data-reveal`) is hidden only under `.js` and `prefers-reduced-motion: no-preference`, so the page reads fully without JS or with reduced motion. Do not put `data-reveal` on the hero H1 (it is the LCP element). Infinite animations must end on a sensible frame or be switched off under reduced motion.
- **Sections** live in `src/components/sections/`; `Landing.astro` only composes them and builds the JSON-LD. Illustrations in the feature bento are built from the app's UI patterns in HTML/CSS and are `aria-hidden`; the text next to them carries the meaning.
- **All copy lives in `src/i18n/copy.ts`**, typed by `Copy`; both locales must stay complete. Never hardcode user-facing strings in components.
- **Copy must match the app.** No card scanning by camera, no live market prices, no trading, no light mode. Do not invent ratings, testimonials or download counts.
- **Write like a person:** avoid em dashes and stock AI phrasing in copy.
- **Theme:** only tokens from `src/styles/tokens.css` (they mirror the app's `theme.ts`). Gold on warm black; no purple, cyan or blue accents. Body text that has to pass WCAG AA uses `--color-text-secondary`, never `--color-text-tertiary`.
- **URLs:** `trailingSlash: 'never'` with `build.format: 'file'`. Cloudflare (`html_handling: auto-trailing-slash`) serves `/privacy` and 307-redirects `/privacy.html` and `/privacy/`. Canonicals are computed in `src/layouts/Base.astro`.
- **SEO:** each page sets a unique title and description through `Base.astro`. Only pages listed in `TRANSLATIONS` (`src/config/translations.mjs`: landing, guides index, every guide) carry hreflang alternates; the sitemap `serialize` hook in `astro.config.mjs` keeps them off the English-only legal pages. Pages that should not be indexed pass `noindex` (no canonical is emitted then).
- **Guides:** one Markdown file per locale in `src/content/guides/<locale>/<slug>.md`, rendered by the `[slug].astro` routes under `/guia` and `/en/guide`. A new guide needs both languages and a `[pt-BR slug, English slug]` pair in `GUIDE_SLUGS`, or it gets no hreflang. Same claims rules as the landing copy.
- **Yu-Gi-Oh! in copy:** name the game to say what the app is for (nominative use), never to suggest it is official. No Konami logo, fonts or card back; keep the fan-made disclaimer in the footer.
- **IndexNow:** the deploy workflow runs `npm run seo:indexnow` after `wrangler deploy`; the key is the 32-hex `.txt` file in `public/`. Do not rename or delete it.
- **Store badges** in `public/badges/` are the official artwork; do not restyle or recolor them.
- **Legal documents** in `src/content/legal/` are the source of truth (moved from the app repo). Update the `Last updated` line when the substance changes.
- **Domain:** `SITE` in `astro.config.mjs`, `routes` in `wrangler.jsonc` and `ops/legal-redirect/`. Change them together.
- **App links and password reset:** `public/.well-known/` binds `/reset-password*` to the production app (`G4P44BRVAX.com.ygotracker`, `com.ygotracker` with its signing fingerprints); the Apple file has no extension and gets `application/json` from `public/_headers`. A change of Apple team, bundle id, package or signing certificate in the app ships here first. `/reset-password` and `/dev/reset-password` (`ResetPasswordPage.astro`) carry a one-hour reset code in the query string: keep them `noindex`, out of the sitemap, with `no-referrer` and the CSP in `public/_headers` that blocks every third-party script and connection (the analytics beacon included), and never send the code anywhere but the app button. They show Portuguese, then English, on one URL, because the reset Worker sends one link to everyone.

## Cloudflare

Cloudflare is folding Pages into Workers; this site is a Workers static-assets project, not Pages. Your knowledge of both may be outdated; check https://developers.cloudflare.com/workers/static-assets/ before changing `wrangler.jsonc`, `_headers`, `_redirects` or the deploy workflow.
