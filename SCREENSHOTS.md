# Screenshot audit

Actual browser screenshots captured on 2026-10-04 from an isolated in-memory evaluation of the audited RestaurantPOS commit (see PRODUCT_CAPABILITIES.md). The reference checkout remained unchanged. Build/runtime were disposable in /tmp; no product dependencies or source were copied into this website. Only optimized screenshots are included. Data is synthetic starter menu, staff and tables plus an evaluation order; no customer data, live configuration or tokens are included. Screens show actual UI, without fabricated overlays.

| Marketing asset | Product screen | Source | Status |
|---|---|---|---|
| pos-ordering.webp | Order (selected Table 1; menu and draft cart) | frontend/app/main.ts; frontend domain modules | Captured |
| tables.webp | Table floor | frontend/app/main.ts; frontend domain modules | Captured |
| waiter.webp | Order station (table selection) | frontend/app/main.ts; frontend domain modules | Captured |
| kitchen-display.webp | Kitchen KDS (active sample tickets) | frontend/app/main.ts; frontend domain modules | Captured |
| bar-display.webp | Bar KDS (sample drink ticket) | frontend/app/main.ts; frontend domain modules | Captured |
| billing.webp | Cashier billing desk | frontend/app/main.ts; frontend domain modules | Captured |
| inventory.webp | Inventory alerts | frontend/app/main.ts; frontend domain modules | Captured |
| reports.webp | Reporting center | frontend/app/main.ts; frontend domain modules | Captured |
| menu-admin.webp | Menu admin | frontend/app/main.ts; frontend domain modules | Captured |
| users.webp | Staff & settings | frontend/app/main.ts; frontend domain modules | Captured |
| audit.webp | Audit history | frontend/app/main.ts; frontend domain modules | Captured |
| settings.webp | Super admin workspace | frontend/app/main.ts; frontend domain modules | Captured |
| cloud-sync.webp | Cloud Synchronization settings (not connected; evaluation mode) | frontend/app/main.ts; frontend domain modules | Captured |

No required image slots remain placeholders. The original .svg neutral placeholders are retained as editable fallback assets but are not displayed. Additional captures recommended before launch: billing receipt after a paid sample transaction; reports with richer synthetic sales; cloud sync health from a configured PostgreSQL staging pair. The settings screenshot is not evidence that a cloud connection is active. Dimensions: 1200×750, WebP. Review screenshots for publication approval and refresh them when product UI changes.
