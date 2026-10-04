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

## Additional workflow captures

Captured from the same disposable in-memory product evaluation, using synthetic data only. A sample cash payment is recorded for the bill; reporting captures show actual resulting activity and preserve missing-cost warnings from the product UI. Screens were captured at relevant scroll positions, not fabricated or redesigned.

| Marketing asset | Product screen | Source | Status |
|---|---|---|---|
| waiter-progress.webp | Waiter progress | frontend/app/main.ts; frontend/waiter/order-progress.ts | Captured |
| table-layout.webp | Table layout admin | frontend/app/main.ts | Captured |
| localization.webp | English/Myanmar branch labels | frontend/app/main.ts; backend/i18n/resources.ts | Captured |
| printers.webp | Bill and printer settings | frontend/app/main.ts; backend/hardware/printerTransport.ts | Captured |
| inventory-movements.webp | Item balances and stock posting controls | frontend/app/main.ts; backend/inventory/service.ts | Captured |
| kitchen-preparing.webp | Preparing ticket state | frontend/kds/kitchen-screen.ts; frontend/app/main.ts | Captured |
| kitchen-history.webp | Ready item history | frontend/kds/kitchen-screen.ts; frontend/app/main.ts | Captured |
| billing-paid.webp | Cashier bill with recorded payment | frontend/app/main.ts; backend/billing/service.ts | Captured |
| billing-receipt.webp | Actual receipt print preview | frontend/app/main.ts; backend/billing/service.ts | Captured |
| report-daily-summary.webp | Daily summary with sample bill activity | frontend/app/main.ts; backend/reports/service.ts | Captured |
| report-product-mix.webp | Item-level mix and actual missing-cost warnings | frontend/app/main.ts; backend/reports/service.ts | Captured |
| report-operations.webp | Station/service report | frontend/app/main.ts; backend/reports/service.ts | Captured |
| report-inventory.webp | Inventory control report | frontend/app/main.ts; backend/reports/service.ts | Captured |

26 genuine WebP assets total. No required image slots remain placeholders. The original .svg fallback assets are retained but not displayed. Optional future capture: active cloud synchronization from a configured PostgreSQL staging pair. The existing cloud settings capture remains explicitly unconnected. All WebP images use 1200×750 dimensions. Refresh captures when product UI changes and review them for publication approval.
