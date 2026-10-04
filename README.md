# SYM POS public website

Independent Next.js App Router, React, strict TypeScript and Tailwind marketing application. The product reference is https://github.com/macmann/RestaurantPOS. This website never imports its code, calls its API, uses its database or shares its environment or deployment. The reference checkout was inspected read-only; see PRODUCT_CAPABILITIES.md for the audited commit and evidence.

## Development

Node 20.9+ (Node 22 recommended).

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Visit http://localhost:3000. In constrained environments use `npm ci --cache /tmp/sym-npm-cache`.

## Production and checks

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Browser verification:

```bash
npx playwright install chromium
npm test
# Existing Chromium in a restricted environment:
PLAYWRIGHT_CHROMIUM_EXECUTABLE=/usr/bin/chromium npm test
```

Tests assume the default cloud demo URL and no contact webhook. Cover every route, metadata, navigation/keyboard, mobile menu, FAQ, CTA destinations, validation, honest unconfigured contact delivery, internal links and overflow at 320–1920px. Performance target: Lighthouse 90+ / accessibility 95+ / best practices 95+ / SEO 95+. These targets are not public claims or measured guarantees. Run production Lighthouse before launch on the deployed origin.

## Content and screenshots

`content/` holds brand, navigation, features, solutions, detailed page copy, FAQ, resources, walkthrough, screenshot galleries and route inventory. Reusable server-rendered components live in `components/`; only navigation and contact interaction need client components. Colors, spacing, focus and reduced-motion rules live in `styles/globals.css`. Inter and Noto Sans Myanmar are self-hosted npm fonts; no Google Fonts runtime request.

`public/product/` contains 26 genuine screenshots from an isolated in-memory product evaluation, using synthetic starter data and sample orders and a paid sample bill. SCREENSHOTS.md records the screen sources and remaining optional improvements. Original neutral SVG fallback assets are retained but not displayed. Replace WebP files with refreshed approved captures at the same paths and preserve 1200×750 dimensions. Captions explicitly identify sample evaluation data. Product screenshots never include customer records, credentials or live infrastructure secrets. Brand assets reproduce the product’s plate-and-receipt mark in the marketing palette; see BRAND.md.

## Burmese localization

English pages keep their existing URLs. Every public page has a Burmese version under `/my` (for example `/my/features` and `/my/solutions/restaurants`). The header switch preserves the current page, query and section anchor; the footer links open each language’s homepage. Both languages render their HTML language, title, description, canonical and `hreflang` metadata on the server. The sitemap includes all 32 localized URLs. No language cookie, translation service or external font request is required.

Burmese Unicode content lives in `content/burmese.ts`; navigation and contact messages live in `lib/locale.ts`. `components/burmese-page.tsx` renders the localized workflows, documentation links, screenshot galleries and open-source/support calls to action. Language-specific root layouts use the shared `components/site-layout.tsx`. English routes are in `app/(en)`; Burmese routes are in `app/(my)/my`. Burmese content pages are prerendered; both contact pages read delivery configuration at request time and use the same contact endpoint. Add new pages to both the English route inventory and Burmese content, and provide matching section anchors for translated navigation links.

Product screenshots preserve their actual captured interface text; captions and alternative text are localized. Linked product documentation remains in its repository’s original language. Noto Sans Myanmar is self-hosted and Burmese typography uses extra line height. Legal pages remain review templates in both languages.

Localization tests cover every Burmese route and screenshot asset, metadata, language switching in both directions, mobile menu/FAQ behavior, font loading, translated field validation and delivery feedback, all-page accessibility scans and widths from 320 to 1920px.

## Environment variables

| Variable | Purpose |
|---|---|
| NEXT_PUBLIC_SITE_URL | Canonical absolute website origin; defaults to localhost for development. Set your real website domain before building. |
| NEXT_PUBLIC_DEMO_URL | Optional override for demo CTAs; defaults to https://demo.sympos.site/. Both demo pages publish the cloud instance and its public superadmin/password123 login. |
| NEXT_PUBLIC_GITHUB_URL | Product source repository URL; default RestaurantPOS. |
| NEXT_PUBLIC_COMPANY_NAME | Display operator name; default SYM POS. Confirm actual legal identity before publishing legal text. |
| NEXT_PUBLIC_ANALYTICS_ID | Optional Plausible domain. Only a valid configured domain loads the Plausible script; no tracker or analytics request by default. Requires independent Plausible service setup and privacy review. |
| NEXT_STANDALONE | Build-only: set to `1` for standalone output. Docker sets this automatically. Normal Node builds use standard `next start`. |
| CONTACT_EMAIL | Server-side validated business email displayed as a mailto fallback. Does not provide server-side email sending. |
| CONTACT_WEBHOOK_URL | Server-side HTTPS endpoint accepting inquiry JSON. Configure at runtime; never expose in a public variable. |

Public settings are embedded during build; changing them requires rebuilding. Blank or invalid optional URLs are ignored. Invalid site URLs fall back to localhost, so confirm generated canonicals before launch. No POS environment variables or database are required. Do not commit local environment files.

## Contact integration

`POST /api/contact` validates required fields, email, integer counts and size limits, rejects cross-origin browser requests, checks a honeypot and limits repeat requests per email for a minute. Delivery uses a server-only HTTPS webhook, a 10-second timeout and no redirect following. Success is shown only after an upstream 2xx response. Confirm the receiver stores/delivers messages before production; an HTTP acceptance cannot prove a human has read them. No request bodies or secrets are logged or stored locally.

When no webhook is configured, submissions return 503 with a clear message. CONTACT_EMAIL offers a visible mailto alternative that the visitor sends through their own mail client. It is not an email transport. In-memory repetition protection is per process and resets on restart; use host-level body limits, rate limiting and spam controls for public exposure, especially across replicas. Do not auto-retry ambiguous webhook deliveries. Recommended receiver: an independently configured CRM or notification workflow with data retention policies and optional idempotency support.

## Coolify — independent application

1. Add a new **Application** from this repository. Keep it separate from the RestaurantPOS application even on the same VPS.
2. Choose **Dockerfile** build pack, Dockerfile `/Dockerfile`, build context `/`, port **3000**.
3. Set `NEXT_PUBLIC_SITE_URL` to your actual website origin and optional public variables as **build arguments** (and environment values if the platform requires both). The Dockerfile declares these build arguments.
4. Add `CONTACT_WEBHOOK_URL` and/or `CONTACT_EMAIL` as runtime environment variables. Never use a POS database or credentials.
5. Assign the website custom domain in Coolify, point its DNS A/AAAA record to the VPS (only publish a working IPv6 address), and enable proxy HTTPS. Keep the demo/product domain assigned to its own application.
6. Deploy. Health check: HTTP GET `/` on port 3000, expect 200. Verify contact delivery, canonical origin, `/sitemap.xml` and `/robots.txt`.
7. Rebuild after public configuration changes; restart after server-side contact changes. Monitor the independent application.

Docker uses a multi-stage Node 22 image, Next standalone output and a non-root runtime user. It was provided as a deployment artifact; a Docker build is not implied unless recorded in QA.md.

Alternative Coolify Nixpacks/Node settings: install `npm ci`, build `npm run build`, start `npm start`, port 3000, Node 22. Set build-time public environment variables before the build.

## Vercel and generic Node hosting

Vercel: import this repository, select Next.js, configure environment variables, build/deploy, then add your domain and follow Vercel’s DNS instructions. The contact route requires Node server capability.

Generic Node: `npm ci && npm run build`, then `PORT=3000 npm start` behind an HTTPS reverse proxy and process supervisor. Alternatively use the standalone Docker image. A static-only host cannot run contact delivery. Keep hosting independent of the POS installation.

Example architecture (domains illustrative, never hard-coded):

```text
RestaurantPOS repo → its own Coolify app → product/demo domain
SYM-POS-Website repo → separate Coolify app → public marketing domain
```

## Launch checklist

Replace legal templates with organization-approved privacy and terms. Review the captured screenshots, configure and verify inquiry delivery, configure actual site/demo domains and custom-support content. Confirm deployed security headers, request/rate limits, TLS and operational monitoring. No fake customers, ratings, prices or certifications are used. Review claims against any newer product version before publishing.

## Open-source site direction

The website emphasizes the open-source RestaurantPOS project, self-hosted evaluation and GitHub participation. Header, footer, community sections and final calls to action link directly to the configurable product GitHub URL and invite stars without fabricated counts. Contact Us is for custom deployment support, configuration, guided walkthroughs and custom-development discussions. There is no software pricing route: `/pricing` returns 404 and is absent from navigation and sitemap. The billing-calculation documentation link remains because it explains product tax and discounts, not software pricing.

Every main product/solution page contains detailed workflow text, setup considerations, feature bullets, multiple real screenshots and relevant guide links. Screenshots open at full size for inspection. Legal pages remain clearly marked templates requiring operator approval; the site does not invent license terms or support guarantees.
