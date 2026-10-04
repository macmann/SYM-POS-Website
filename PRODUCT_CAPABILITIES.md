# Product capability audit

Reference: https://github.com/macmann/RestaurantPOS at `32bcfaea8b9ebbb487370c90e23d869a38c91486`. Audited 2026-10-04. Read-only reference checkout; no product changes. Code inspection confirms implementation, not production certification or hardware validation.

| Capability | Marketing claim | Repository evidence | Status |
|---|---|---|---|
| LAN operation | Browser terminals reach a local server; WAN not required | README.md; docs/deployment-lan.md; backend/server.ts | Verified |
| Tables & ordering | Tables, takeout, quantities, notes, modifiers | frontend/cashier/table-floor.ts; frontend/orders/order-screen.ts; backend/orders/service.ts | Verified |
| Kitchen & bar | Station queues and preparing/ready item progress | frontend/kds/kitchen-screen.ts; frontend/kds/bar-screen.ts; backend/kds/service.ts | Verified |
| Billing | Split bills, discounts, tax, payment recording, debt settlement, receipts | frontend/billing/billing-screen.ts; backend/billing/service.ts; backend/server.ts | Verified |
| Inventory | Records, stock movements, low-stock alerts, optional recipe links | frontend/admin/inventory-alerts.ts; backend/inventory/service.ts; backend/inventory/repository.ts | Verified |
| Reports | Daily summary, business day, product mix, station, exceptions, CSV/print | backend/reports/service.ts; frontend/reports/export.ts; tests/daily-summary.unit.test.ts; tests/product-mix.unit.test.ts | Verified |
| Menu import | Validated transactional .xlsx imports, 5000 rows/5MB | docs/menu-bulk-import.md; backend/menu/bulkImport/parser.ts; backend/menu/bulkImport/service.ts; tests/menu-bulk-import.unit.test.ts | Verified |
| Authentication | PBKDF2 password hashes, hashed session tokens, active status and RBAC | backend/auth/service.ts; backend/auth/sessionRepository.ts; backend/auth/permissions.ts; backend/auth/middleware.ts | Verified |
| Roles | waitstaff, cashier, kitchen, bar, shift_lead, inventory_clerk, manager, admin, superadmin; specialized reporting: financial_analyst, operations_analyst, loss_prevention, inventory_accountant | backend/auth/permissions.ts; userguide.md (rbac-matrix.md lists fewer roles) | Verified |
| Audit | Operational traceability; no immutability claim | backend/audit/service.ts; frontend/admin/audit-viewer.ts | Verified |
| Persistence | PostgreSQL production; temporary in-memory evaluation | backend/db/client.ts; backend/db/repositoryStore.ts; tests/database-persistence.e2e.test.ts | Verified |
| Localization | English/Myanmar resources and editable labels | backend/i18n/resources.ts; frontend/i18n/locale-switcher.ts; userguide.md | Verified |
| Printers | Simulator, Windows installed queue, TCP network transport | backend/hardware/printerTransport.ts; backend/hardware/receiptPrinter.ts; backend/hardware/orderPrinter.ts | Verified |
| Menu sync | Optional bidirectional menu sync, durable queues and diagnostics | docs/cloud-sync-configuration.md; backend/sync/service.ts; backend/sync/worker.ts; tests/menu-bidirectional-sync.unit.test.ts | Verified |
| Branch partition | Branch-scoped deployments and Store ID partition | backend/config/branch.ts; backend/sync/config.ts; docs/hybrid-architecture.md | Verified |
| Complete HQ platform | Not marketed; selective mirroring does not establish a complete HQ product | docs/hybrid-architecture.md; frontend/app/remote-surfaces.ts | Partially implemented |
| Integrated payments, forecasting, native apps, certifications | Not marketed; no sufficient implementation or certification evidence | backend/integrations/paymentTerminal.ts is insufficient for a gateway claim | Not implemented |

Reviewed README, userguide, STATUS, architecture, ERD, LAN, hybrid, cloud sync, pricing rules, RBAC, E2E readiness, frontend screens, backend services/endpoints, shared contracts, package and test coverage. Architecture prose includes aspirational immutability and integrations; those statements are intentionally excluded. Full transaction replication and centralized inventory are not advertised.

Open-source positioning follows the product owner’s explicit instruction. No specific software license, free hosted service, support SLA or permissive-use terms are invented. GitHub star links do not claim a count or perform automatic account actions. The removed software pricing page is unrelated to the retained product billing-calculation documentation.
