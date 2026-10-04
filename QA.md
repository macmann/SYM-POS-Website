# QA results

Verified 2026-10-04 against the production Next.js build.

| Check | Result |
|---|---|
| npm run lint | Passed, no warnings |
| npm run typecheck | Passed |
| npm run build | Passed; 32 public URLs (16 English + 16 Burmese) plus API and SEO assets |
| npm test | 18 passed, using system Chromium |
| WCAG A/AA automated checks | No violations across all 32 localized public URLs |
| Responsive overflow | None at 320, 375, 430, 768, 1024, 1440, 1920px across all 32 localized public URLs; Burmese also checked at 1100 and 1280px |
| Myanmar font | Noto Sans Myanmar loaded and rendering checked |
| Reference checkout | git status clean; no source changes |
| Docker image | Dockerfile reviewed; image not built in this session |

Localization adds complete route/metadata and screenshot-asset checks, page/query/anchor-preserving language switching, translated form validation and delivery feedback, Burmese menu/FAQ/font behavior, and all-page accessibility/layout checks. Tests cover removed pricing route (404), GitHub star and custom-support links, screenshot asset responses, all routes and metadata, homepage/FAQ/CTA behavior, mobile navigation and Escape/focus handling, keyboard dropdowns, demo configuration branches, contact field validation, honest unavailable delivery, cross-origin rejection, mocked webhook acceptance/failure/repeat protection, internal link responses, browser errors and the checks above. Webhook tests use stub responses; no external inquiries were sent. Production contact receiver configuration and delivery must be verified by the operator.

## Lighthouse

English content-expansion baseline run (before localization), default mobile simulation, Lighthouse 13.5.0 with system Chromium:

| Category | Score |
|---|---:|
| Performance | 98 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |

LCP: 2.3 seconds. CLS: 0.001. TBT: 50 ms. See reports/lighthouse-summary.json for timestamp and measured environment. Scores vary by host, network and deployment configuration; rerun on the final public origin. Automated checks supplement manual keyboard and visual inspection and do not establish universal accessibility compliance.

The localized Burmese homepage also scored Performance 98, Accessibility 100, Best practices 100 and SEO 100 on a production mobile run; LCP 2.3 seconds and CLS 0.008. See reports/lighthouse-burmese-summary.json. Burmese desktop/mobile and mobile menu captures were visually reviewed.

Screenshots of the complete website were generated in test-results/home-desktop.png and test-results/home-mobile.png (ignored test artifacts). Product captures in public/product are actual screens with synthetic evaluation data. The local production server is available on port 3000. This task created deployment configuration and instructions, but did not publish the site externally.
