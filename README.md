# YGO Tracker site

Marketing site for [YGO Tracker](https://github.com/adrielfabricio/ygo-tracker), the app for tracking a physical Yu-Gi-Oh! card collection. It is a static [Astro](https://astro.build) site served by Cloudflare as a static-assets Worker (`ygo-tracker-site`) at https://ygotracker.app. It hosts the landing page in Portuguese and English, the app's legal pages, the app's password-reset links, and the page deck share links fall back to (association files and landing pages).

| Path                        | What                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------- |
| `/`                         | Landing page, pt-BR (default locale, `x-default`)                                     |
| `/en`                       | Landing page, English                                                                 |
| `/privacy`                  | Privacy policy (English)                                                              |
| `/terms`                    | Terms of use (English)                                                                |
| `/support`                  | Support and FAQ (English)                                                             |
| `/guia`, `/en/guide`        | Guides index; each guide at `/guia/<slug>` and `/en/guide/<slug>`                     |
| `/download`, `/en/download` | Short link: sends phones to their store, shows both badges elsewhere (`noindex`)      |
| `/reset-password`           | Password-reset link of the app's email, when it does not open the app (`noindex`)     |
| `/dev/reset-password`       | Same page for the development app (`ygotracker-dev://`), linked from nowhere          |
| `/d`                        | Deck share link, when it does not open the app: button to open it, badges (`noindex`) |
| `/dev/d`                    | Same page for the development app (`ygotracker-dev://`), linked from nowhere          |
| `/.well-known/*`            | App Links / universal links association files for `/reset-password*` and `/d`         |

## Commands

Requires Node 22.12+ (`.nvmrc`).

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # static output in dist/
npm run preview        # serve dist/
npm run check          # astro check (types + .astro diagnostics)
npm run format:write   # prettier
npm run og:render      # regenerate public/og/*.png with headless Chrome (commit the result)
npm run seo:indexnow   # after build + deploy: ask IndexNow engines (Bing…) to recrawl the sitemap
```

To test Cloudflare routing, `_headers` and redirects locally: `npm run build && npx wrangler dev`.

## Where things live

| Thing                                       | Path                                                 |
| ------------------------------------------- | ---------------------------------------------------- |
| Production origin (`site`), i18n, sitemap   | `astro.config.mjs`                                   |
| Store IDs, campaign links, free-tier limits | `src/config/site.ts`                                 |
| All landing copy, both languages            | `src/i18n/copy.ts`                                   |
| Landing sections (hero, bento, plans…)      | `src/components/sections/`                           |
| Design tokens (mirror the app theme)        | `src/styles/tokens.css`                              |
| Legal documents (source of truth)           | `src/content/legal/*.md`                             |
| Guides (one file per locale) + slug pairs   | `src/content/guides/`, `src/config/translations.mjs` |
| Official store badges                       | `public/badges/`                                     |
| App-link association files                  | `public/.well-known/`                                |
| Reset landing page                          | `src/components/ResetPasswordPage.astro`             |
| Ionicons subset (MIT)                       | `src/icons/`                                         |
| Redirect bundle for the old legal site      | `ops/legal-redirect/`                                |

## Keeping in sync with the app

- **Theme:** `src/styles/tokens.css` mirrors `ygo-tracker/src/global/theme/theme.ts`.
- **Free-tier limits:** `FREE_LIMITS` in `src/config/site.ts` mirrors `FREE_TIER_LIMITS` in `ygo-tracker/src/global/constants/premium.ts`.
- **Hero mockup:** `src/components/PhoneMockup.astro` rebuilds the app's Dashboard with the app's strings. Update it when the Dashboard changes.
- **App links:** `public/.well-known/apple-app-site-association` (app `G4P44BRVAX.com.ygotracker`) and `public/.well-known/assetlinks.json` (package `com.ygotracker`, Play app signing and EAS upload key fingerprints) bind `/reset-password*` and the exact path `/d` to the production app (never a `/d*` prefix: it would capture `/download` and `/dev/…`). A change of Apple team, bundle id, Android package or signing certificate in the app must land here and be deployed **before** the app build that depends on it. The development app is in neither file.
- **Password reset:** the reset Worker (`ygo-tracker-password-reset`) links to `/reset-password?oobCode=…&mode=resetPassword` (dev: `/dev/reset-password`). The page's button opens `ygotracker://reset-password` with the same query; keep the path and the scheme in step with the app's `/reset-password` route and `app.config.js`.
- **Deck share links:** the app builds `https://ygotracker.app/d?v=1&name=…&url=ydke://…` (dev: `/dev/d`); the whole deck is in the query. `/d` and `/dev/d` (`DeckLinkPage.astro`) follow the reset pages' rules: `noindex`, out of the sitemap, `no-referrer`, the CSP in `public/_headers`. The page's button opens `ygotracker://decks/import-ydke` with the same query (dev: `ygotracker-dev://`), a route every app build reads; keep it in step with the app. Builds before 1.3.0 that claim the domain open `/d` on their "not found" screen.
- **Claims:** the copy must describe only what the app does. It does not scan cards with the camera (the camera only reads deck QR codes), it does not fetch market prices (users enter their own), and it has no trading.

## Deploy

The site is a static-assets Worker (no script) configured in `wrangler.jsonc`: Cloudflare serves `dist/`, applies `public/_headers` and `public/_redirects`, and answers on the custom domain `ygotracker.app`. `workers_dev` and preview URLs are off, so no duplicate copy of the site is reachable.

- **CI** (`.github/workflows/ci.yml`): format, `astro check` and build on every PR and on pushes to `develop` and `main`.
- **Deploy** (`.github/workflows/deploy.yml`): pushes to `main` build, run `wrangler deploy`, then ping IndexNow (`npm run seo:indexnow`, never fails the job).
- **Manual deploy:** `npm run deploy` (requires `npx wrangler login`).

Cloudflare is folding Pages into Workers; new projects should not use `wrangler pages` commands.

One-time setup for CI deploys:

1. Add the repository secrets `CLOUDFLARE_API_TOKEN` (Workers Scripts Edit, Workers Routes Edit, Zone Read on `ygotracker.app`) and `CLOUDFLARE_ACCOUNT_ID`.
2. In the `ygotracker.app` zone, turn on SSL/TLS → Edge Certificates → **Always Use HTTPS**.
3. Turn on Cloudflare Web Analytics for `ygotracker.app`. The privacy policy already describes it.

### Changing the domain

The origin appears in `astro.config.mjs` (`SITE`), in `wrangler.jsonc` (`routes`) and in `ops/legal-redirect/`. Canonical URLs, hreflang, Open Graph, `robots.txt` and the sitemap all derive from `SITE`.

### Retiring the old legal site

The legal pages used to live at `ygo-tracker-legal.pages.dev`. After the site is live on its domain, deploy the redirect bundle to that project once:

```bash
npx wrangler pages deploy ops/legal-redirect --project-name ygo-tracker-legal --branch main --force
```

`--force` keeps Wrangler from delegating the command to Workers: `ygo-tracker-legal` is an existing Pages project.

Every old URL, with or without `.html`, then answers with a 301 to the same path on the new domain.

## Trademarks

YGO Tracker is a fan-made project with no affiliation, sponsorship or endorsement from Konami. Card names, artwork and trademarks belong to their respective owners. The App Store and Google Play badges are used unmodified under Apple's and Google's badge guidelines.
