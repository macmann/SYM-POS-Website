# QA results

Verified 2026-10-04 against the production Next.js build.

| Check | Result |
|---|---|
| npm run lint | Passed, no warnings |
| npm run typecheck | Passed |
| npm run build | Passed; 16 public routes plus API and SEO assets |
| npm test | 13 passed, using system Chromium |
| WCAG A/AA automated checks | No violations across all 16 public routes |
| Responsive overflow | None at 320, 375, 430, 768, 1024, 1440, 1920px across all 16 public routes |
| Myanmar font | Noto Sans Myanmar loaded and rendering checked |
| Reference checkout | git status clean; no source changes |
| Docker image | Dockerfile reviewed; image not built in this session |

Tests cover removed pricing route (404), GitHub star and custom-support links, screenshot asset responses, all routes and metadata, homepage/FAQ/CTA behavior, mobile navigation and Escape/focus handling, keyboard dropdowns, demo configuration branches, contact field validation, honest unavailable delivery, cross-origin rejection, mocked webhook acceptance/failure/repeat protection, internal link responses, browser errors and the checks above. Webhook tests use stub responses; no external inquiries were sent. Production contact receiver configuration and delivery must be verified by the operator.

## Lighthouse

Final local production run, default mobile simulation, Lighthouse 13.5.0 with system Chromium:

| Category | Score |
|---|---:|
| Performance | 98 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |

LCP: 2.3 seconds. CLS: 0.001. TBT: 50 ms. See reports/lighthouse-summary.json for timestamp and measured environment. Scores vary by host, network and deployment configuration; rerun on the final public origin. Automated checks supplement manual keyboard and visual inspection and do not establish universal accessibility compliance.

Screenshots of the complete website were generated in test-results/home-desktop.png and test-results/home-mobile.png (ignored test artifacts). Product captures in public/product are actual screens with synthetic evaluation data. The local production server is available on port 3000. This task created deployment configuration and instructions, but did not publish the site externally.
