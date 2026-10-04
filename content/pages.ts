export const pages = {
  "offline-first": {
    eyebrow: "THE LOCAL-FIRST DIFFERENCE",
    title: "Your restaurant network. Your working day.",
    description:
      "Core restaurant workflows can keep running without continuous public Internet access, as long as your devices reach the local SYM POS server and PostgreSQL database.",
    blocks: [
      [
        "A connection that stays close to service",
        "Terminals use a browser to connect over your restaurant’s Ethernet or Wi-Fi network. Orders, preparation updates, billing and inventory use the local server. A public Internet outage does not need to interrupt those requests.",
      ],
      [
        "Persistent storage for real operations",
        "Use PostgreSQL for durable restaurant data. In-memory evaluation mode is temporary and loses data when the application stops. Plan database backups, tested restores and sufficient storage before opening for service.",
      ],
      [
        "What happens during an Internet outage?",
        "If the restaurant LAN, server and database remain available, local ordering, kitchen/bar queues, payment recording and receipts can continue. Optional cloud synchronization waits for connectivity. A terminal disconnected from the LAN cannot submit orders independently.",
      ],
      [
        "Availability is an infrastructure responsibility",
        "Keep the local server and network powered, use a stable server address and monitor database health. A UPS, secure firewall rules and backup procedures are practical parts of a deployment. Local-first does not make infrastructure immune to failure.",
      ],
    ],
    diagram: "lan",
  },
  "kitchen-display": {
    eyebrow: "KITCHEN & BAR",
    title: "Give every preparation station a clear view.",
    description:
      "Browser-based kitchen and bar queues connect preparation teams to the orders being taken on the floor.",
    blocks: [
      [
        "Separate queues for separate teams",
        "Kitchen and bar screens load station-specific active queues and history. Menu preparation station assignments determine where items appear, so each team can focus on its own work.",
      ],
      [
        "Item detail that travels with the order",
        "Quantities, order item notes and preparation status help staff understand what is needed. Operators can move an item to preparing or ready; the floor can review that preparation progress.",
      ],
      [
        "Displays and configured printers",
        "Use a supported browser on a restaurant display connected to the LAN. Preparation ticket printing is available through configured printer transports. Test station routing and printer setup with your own devices before service.",
      ],
    ],
    screen: "kitchen-display",
  },
  inventory: {
    eyebrow: "INVENTORY CONTROL",
    title: "Know what’s moving behind the counter.",
    description:
      "Inventory records, stock movements and low-stock visibility give your team a practical way to follow restaurant stock.",
    blocks: [
      [
        "Inventory records and movement history",
        "Maintain inventory items and review recorded stock movements. Authorized users can make adjustments, giving stock changes an operational record instead of a separate handwritten note.",
      ],
      [
        "Low-stock visibility",
        "Configure inventory thresholds and review low-stock alerts. Use them as a prompt to investigate and replenish; automatic purchasing and supplier management are not advertised.",
      ],
      [
        "Optional menu-to-inventory links",
        "Configured recipe links associate menu items with inventory usage. Enable and test deduction settings for your restaurant’s menu and units rather than assuming every menu item reduces stock automatically.",
      ],
    ],
    screen: "inventory",
  },
  reports: {
    eyebrow: "MANAGEMENT & REPORTING",
    title: "See the shift. Understand the day.",
    description:
      "Review operational activity through implemented restaurant reports, with business-day context and export tools.",
    blocks: [
      [
        "Daily summaries and business-day context",
        "Daily summary reporting groups restaurant activity using the configured business-day and timezone rules. Check your deployment settings to ensure the reporting day matches your operation.",
      ],
      [
        "Product mix and station activity",
        "Product mix reports let managers review item and category activity. Station reports provide preparation-area context, while exception reports collect operational exceptions for investigation.",
      ],
      [
        "Take the report with you",
        "The browser offers CSV downloads and printable report views for supported reports. Reports are permission-gated to manager and administrator access. These tools do not imply forecasting or AI analytics.",
      ],
    ],
    screen: "reports",
  },
  hardware: {
    eyebrow: "DEVICES & PRINTING",
    title: "Connect service to the printers it needs.",
    description:
      "Receipt, kitchen and bar printers work through server-side configured transports. Restaurant terminals use supported browsers.",
    blocks: [
      [
        "Receipts and preparation tickets",
        "Configure separate receipt and preparation printers so output reaches the appropriate station. Receipt printing and kitchen/bar automatic printing depend on your installation settings.",
      ],
      [
        "Windows, network and simulator",
        "Windows transport uses an installed print queue on a Windows host. Network transport sends jobs through configured TCP connections. The simulator supports setup and evaluation without a physical printer.",
      ],
      [
        "Validate your restaurant hardware",
        "Check server-to-printer reachability, Windows queue names and network addresses. Test actual paper output and Unicode rendering for Myanmar text. No printer-brand compatibility certification is claimed.",
      ],
    ],
    diagram: "hardware",
  },
  security: {
    eyebrow: "ACCESS & ACCOUNTABILITY",
    title: "Give each team member the access they need.",
    description:
      "Authenticated sessions, role permissions and active account checks protect implemented operational features.",
    blocks: [
      [
        "Accounts and sessions",
        "Passwords are PBKDF2-hashed before storage. Session tokens are stored as hashes, and session lifetime is configurable. Inactive users cannot authenticate; deactivation also invalidates authenticated access.",
      ],
      [
        "Roles grounded in restaurant work",
        "Implemented role identifiers are waitstaff, cashier, kitchen, bar, shift_lead, inventory_clerk, manager, admin and superadmin. Permission checks apply at protected API boundaries and shape available browser workspaces.",
      ],
      [
        "Know what changed and when",
        "Audit records associate supported sensitive operations with actors and context. Use the audit viewer for operational traceability and troubleshooting. The website does not claim immutable logs or independent security certification.",
      ],
      [
        "Secure deployment still matters",
        "Application controls work alongside operating-system configuration, database security, network segmentation, firewall rules, TLS at the reverse proxy, backups and operational practices. Rotate bootstrap access and use named staff accounts.",
      ],
    ],
    screen: "users",
  },
  "solutions/restaurants": {
    eyebrow: "FOR TABLE-SERVICE RESTAURANTS",
    title: "One connected flow from table to closeout.",
    description:
      "Support the people taking orders, preparing food and drinks, collecting payment and reviewing the day.",
    blocks: [
      [
        "Start on the floor",
        "Waitstaff open a table session, build an order and add quantities, modifiers and item notes. The order stays on the shared local system so the cashier and preparation team use the same operational state.",
      ],
      [
        "Keep preparation connected",
        "Kitchen and bar teams use separate browser queues. Item-level preparing and ready updates let floor staff review progress without passing handwritten tickets around.",
      ],
      [
        "Finish with a clear bill",
        "Generate the bill, handle splits, discounts and configured taxes, record payment and produce a receipt. Managers can review implemented reports, menu configuration and audit activity.",
      ],
    ],
    screen: "tables",
    workflow: true,
  },
  "solutions/cafes": {
    eyebrow: "FOR CAFES & COUNTER SERVICE",
    title: "Keep the counter and preparation connected.",
    description:
      "Use existing cashier, takeout, billing and menu workflows for a cafe deployment without a separate native terminal app.",
    blocks: [
      [
        "Build an order at the counter",
        "Cashier order entry supports menu selection, quantities, notes and takeout orders. Preparation station assignments connect relevant drinks and food to kitchen or bar queues.",
      ],
      [
        "Close the bill and print the receipt",
        "Generate bills and record payment with configured taxes and discounts. Receipt printing uses the server’s configured transport; gateway integration is not implied by payment recording.",
      ],
      [
        "Manage the menu behind service",
        "Update menu items, categories, availability and prices. Use validated Excel import for existing menu data, then review inventory movements and supported daily reports.",
      ],
    ],
    screen: "billing",
  },
  "solutions/multi-location": {
    eyebrow: "FOR RESTAURANT GROUPS",
    title: "Local operations. A considered connection.",
    description:
      "Plan location-specific deployments, branch-aware data and optional menu synchronization. Understand the scope before designing a restaurant-group rollout.",
    blocks: [
      [
        "Each restaurant has a local deployment",
        "A location runs its own SYM POS server and PostgreSQL database. Browser terminals depend on that location’s LAN, keeping core local workflows separate from optional cloud connectivity.",
      ],
      [
        "Branch IDs and Store IDs define partitions",
        "Operational records are branch-scoped. Synchronization uses Store ID partitions, which must agree with the local branch and cloud assignment. Use stable identifiers throughout the rollout.",
      ],
      [
        "Current bidirectional scope: menu data",
        "Menu categories and items can synchronize between local and cloud deployments using durable queues, deterministic conflict handling and snapshot reconciliation. Health diagnostics and manual controls support operation.",
      ],
      [
        "Plan around the implemented scope",
        "Branch-aware architecture and selective cloud surfaces are not a complete centralized HQ management product. This site does not advertise full live transaction replication, centralized inventory or a comprehensive group analytics portal.",
      ],
    ],
    diagram: "cloud",
  },
};
