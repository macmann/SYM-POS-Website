export const pages = {
  "offline-first": {
    eyebrow: "THE LOCAL-FIRST DIFFERENCE",
    title: "Your restaurant network. Your working day.",
    description:
      "Core restaurant workflows can keep running without continuous public Internet access, as long as your devices reach the local SYM POS server and PostgreSQL database.",
    blocks: [
      {
        title: "A connection that stays close to service",
        paragraphs: [
          "Terminals use a browser to connect over your restaurant’s Ethernet or Wi-Fi network. Orders, preparation updates, billing and inventory use the local server. A public Internet outage does not need to interrupt those requests.",
          "The local server is the shared application, not a cache on each terminal. Keep it at a stable address so supported browsers can use the same application and operational records.",
        ],
        bullets: [
          "Cashier and waiter browsers use the restaurant LAN",
          "Kitchen and bar displays reach the same server",
          "Manager workspaces share authoritative local data",
        ],
        screen: "tables",
      },
      {
        title: "Persistent storage for real operations",
        paragraphs: [
          "Use PostgreSQL for durable restaurant data. In-memory evaluation mode is temporary and loses data when the application stops. Plan database backups, tested restores and sufficient storage before opening for service.",
          "Plan production storage before inviting your team to use the system. Choose a PostgreSQL installation you can maintain, schedule backups and practice a restore so your recovery process is understood.",
        ],
        bullets: [
          "Use in-memory mode only for disposable evaluation",
          "Keep database access restricted to trusted services",
          "Verify backup and restore procedures",
        ],
        screen: "settings",
      },
      {
        title: "What happens during an Internet outage?",
        paragraphs: [
          "If the restaurant LAN, server and database remain available, local ordering, kitchen/bar queues, payment recording and receipts can continue. Optional cloud synchronization waits for connectivity. A terminal disconnected from the LAN cannot submit orders independently.",
          "Cloud status and local operational status are different things. A delayed synchronization heartbeat describes the remote connection; it does not by itself mean the restaurant server is unavailable. If a browser loses its local server connection, restore that connection before attempting another write.",
        ],
        bullets: [
          "WAN outage: local work can continue when the LAN is healthy",
          "LAN or server outage: terminals cannot submit local work",
          "Cloud synchronization: resume when connectivity returns",
        ],
        screen: "cloud-sync",
      },
      {
        title: "Availability is an infrastructure responsibility",
        paragraphs: [
          "Keep the local server and network powered, use a stable server address and monitor database health. A UPS, secure firewall rules and backup procedures are practical parts of a deployment. Local-first does not make infrastructure immune to failure.",
          "Before deployment, test your own devices together: take an order, update its preparation status, record a payment and print a receipt. Repeat with public Internet access unavailable while preserving local connectivity.",
        ],
        bullets: [
          "Give the server a stable LAN address",
          "Keep server, database and network equipment powered",
          "Test receipt output and your recovery plan",
        ],
        screen: null,
      },
    ],
    diagram: "lan",
    takeaways: [
      "Local server and PostgreSQL",
      "Ordinary browser terminals",
      "Optional cloud menu connection",
    ],
    guide: "docs/deployment-lan.md",
    related: [
      {
        label: "Read the product guide",
        href: "docs/deployment-lan.md",
      },
      {
        label: "Explore all features",
        href: "/features",
      },
      {
        label: "Ask about custom support",
        href: "/contact?intent=support",
      },
    ],
  },
  "kitchen-display": {
    eyebrow: "KITCHEN & BAR",
    title: "Give every preparation station a clear view.",
    description:
      "Browser-based kitchen and bar queues connect preparation teams to the orders being taken on the floor.",
    blocks: [
      {
        title: "Separate queues for separate teams",
        paragraphs: [
          "Kitchen and bar screens load station-specific active queues and history. Menu preparation station assignments determine where items appear, so each team can focus on its own work.",
          "Menu item preparation stations connect the order to the appropriate queue. A kitchen item and a bar item in the same guest order can appear at their respective stations without requiring separate order entry.",
        ],
        bullets: [
          "Separate kitchen and bar views",
          "Station assignments configured in menu administration",
          "Browser access over the restaurant LAN",
        ],
        screen: "kitchen-display",
      },
      {
        title: "Item detail that travels with the order",
        paragraphs: [
          "Quantities, order item notes and preparation status help staff understand what is needed. Operators can move an item to preparing or ready; the floor can review that preparation progress.",
          "An item can move from its queued state into preparing and then ready. Waitstaff can review progress from their own workspace, giving the floor a shared picture of what the preparation team has updated.",
        ],
        bullets: [
          "Quantities and item notes alongside tickets",
          "Preparing and ready actions at item level",
          "Progress visible to the floor",
        ],
        screen: "waiter-progress",
      },
      {
        title: "Displays and configured printers",
        paragraphs: [
          "Use a supported browser on a restaurant display connected to the LAN. Preparation ticket printing is available through configured printer transports. Test station routing and printer setup with your own devices before service.",
          "Preparation displays and paper tickets are two ways to present the same restaurant workflow. Select the configured printer for each station and verify the physical output before relying on it during a shift.",
        ],
        bullets: [
          "Receipt and preparation destinations configured separately",
          "Windows queues, TCP printers and simulator transport",
          "Actual printer compatibility verified on your hardware",
        ],
        screen: "printers",
      },
      {
        title: "Keep active work separate from history",
        paragraphs: [
          "Ready items move out of the active queue and can be reviewed in history. Use the active screen for current work and the history view to check completed preparation rather than letting finished tickets crowd the queue.",
        ],
        bullets: [
          "Separate active and history views",
          "Kitchen and bar retain their own station context",
          "A ready item is not the same as a settled bill",
        ],
        screen: "kitchen-history",
      },
    ],
    takeaways: [
      "Separate kitchen and bar queues",
      "Item notes and preparation progress",
      "Displays and configured printers",
    ],
    guide: "userguide.md",
    related: [
      {
        label: "Read the product guide",
        href: "userguide.md",
      },
      {
        label: "Explore all features",
        href: "/features",
      },
      {
        label: "Ask about custom support",
        href: "/contact?intent=support",
      },
    ],
  },
  inventory: {
    eyebrow: "INVENTORY CONTROL",
    title: "Know what’s moving behind the counter.",
    description:
      "Inventory records, stock movements and low-stock visibility give your team a practical way to follow restaurant stock.",
    blocks: [
      {
        title: "Inventory records and movement history",
        paragraphs: [
          "Maintain inventory items and review recorded stock movements. Authorized users can make adjustments, giving stock changes an operational record instead of a separate handwritten note.",
          "Use inventory units that make sense for your restaurant. Stock movements and balances are most useful when quantities use consistent units and staff record the reason for an adjustment.",
        ],
        bullets: [
          "Inventory records and item units",
          "Stock movement history",
          "Permission-gated adjustment workflows",
        ],
        screen: "inventory",
      },
      {
        title: "Low-stock visibility",
        paragraphs: [
          "Configure inventory thresholds and review low-stock alerts. Use them as a prompt to investigate and replenish; automatic purchasing and supplier management are not advertised.",
          "A threshold is an operational prompt, not a purchasing order. Review low-stock items against current service needs and physical stock, then record replenishment or correction through the supported movement workflow.",
        ],
        bullets: [
          "Configured minimum thresholds",
          "Low-stock visibility for authorized staff",
          "Review exceptions before making adjustments",
        ],
        screen: "inventory-movements",
      },
      {
        title: "Optional menu-to-inventory links",
        paragraphs: [
          "Configured recipe links associate menu items with inventory usage. Enable and test deduction settings for your restaurant’s menu and units rather than assuming every menu item reduces stock automatically.",
          "Recipe links require deliberate configuration. Map the inventory item, quantity per menu unit and deduction policy, then test a sample order to confirm the expected stock change.",
        ],
        bullets: [
          "Optional menu-to-inventory linking",
          "Configured quantity per menu unit",
          "Deduction policy reviewed before real service",
        ],
        screen: "settings",
      },
      {
        title: "Review usage in context",
        paragraphs: [
          "Bring stock questions into the management review. Recorded usage and the configured mappings provide context for investigation; consistent setup is essential to interpreting the results.",
        ],
        bullets: [
          "Review changes against recorded restaurant activity",
          "Keep inventory units and menu mappings consistent",
          "Use reports as evidence for follow-up, not automatic forecasts",
        ],
        screen: "report-inventory",
      },
    ],
    takeaways: [
      "Inventory records and movements",
      "Low-stock threshold visibility",
      "Optional menu recipe links",
    ],
    guide: "userguide.md",
    related: [
      {
        label: "Read the product guide",
        href: "userguide.md",
      },
      {
        label: "Explore all features",
        href: "/features",
      },
      {
        label: "Ask about custom support",
        href: "/contact?intent=support",
      },
    ],
  },
  reports: {
    eyebrow: "MANAGEMENT & REPORTING",
    title: "See the shift. Understand the day.",
    description:
      "Review operational activity through implemented restaurant reports, with business-day context and export tools.",
    blocks: [
      {
        title: "Daily summaries and business-day context",
        paragraphs: [
          "Daily summary reporting groups restaurant activity using the configured business-day and timezone rules. Check your deployment settings to ensure the reporting day matches your operation.",
          "The restaurant’s reporting day may cross midnight. Set the deployment timezone and business-day rules to match your operation, then use the same date context when reviewing activity and exporting reports.",
        ],
        bullets: [
          "Daily summary with business-day context",
          "Configured timezone and reporting boundaries",
          "Manager and administrator review",
        ],
        screen: "report-daily-summary",
      },
      {
        title: "Product mix and station activity",
        paragraphs: [
          "Product mix reports let managers review item and category activity. Station reports provide preparation-area context, while exception reports collect operational exceptions for investigation.",
          "Start with item and category activity, then examine the relevant preparation station. Product mix and station reports provide different views of the same restaurant activity; use the question you want to answer to choose a view.",
        ],
        bullets: [
          "Product mix by item or category",
          "Recorded station context",
          "Filters and report period controls",
        ],
        screen: "report-product-mix",
      },
      {
        title: "Take the report with you",
        paragraphs: [
          "The browser offers CSV downloads and printable report views for supported reports. Reports are permission-gated to manager and administrator access. These tools do not imply forecasting or AI analytics.",
          "CSV export supports your own review process, while a printable report view helps share a period’s results. Check filters before downloading so the exported data reflects the location and dates you intended.",
        ],
        bullets: [
          "Supported report CSV downloads",
          "Printable report views",
          "Access governed by report permissions",
        ],
        screen: "reports",
      },
      {
        title: "Follow up on operational exceptions",
        paragraphs: [
          "Exceptions deserve a separate conversation from headline totals. Review operational exceptions and audit context before drawing conclusions about a correction, void or unusual sequence of activity.",
        ],
        bullets: [
          "Operational exception reporting",
          "Station activity and progress context",
          "Audit history for supported sensitive actions",
        ],
        screen: "report-operations",
      },
    ],
    takeaways: [
      "Daily and business-day context",
      "Product mix and station activity",
      "CSV and printable exports",
    ],
    guide: "userguide.md",
    related: [
      {
        label: "Read the product guide",
        href: "userguide.md",
      },
      {
        label: "Explore all features",
        href: "/features",
      },
      {
        label: "Ask about custom support",
        href: "/contact?intent=support",
      },
    ],
  },
  hardware: {
    eyebrow: "DEVICES & PRINTING",
    title: "Connect service to the printers it needs.",
    description:
      "Receipt, kitchen and bar printers work through server-side configured transports. Restaurant terminals use supported browsers.",
    blocks: [
      {
        title: "Receipts and preparation tickets",
        paragraphs: [
          "Configure separate receipt and preparation printers so output reaches the appropriate station. Receipt printing and kitchen/bar automatic printing depend on your installation settings.",
          "Printer jobs originate at the restaurant server. A tablet does not need its own direct printer connection when the server can reach the configured printer transport. This makes server-side network and queue setup a key part of commissioning.",
        ],
        bullets: [
          "Receipt output for the customer",
          "Kitchen preparation tickets",
          "Bar preparation tickets",
        ],
        screen: "printers",
      },
      {
        title: "Windows, network and simulator",
        paragraphs: [
          "Windows transport uses an installed print queue on a Windows host. Network transport sends jobs through configured TCP connections. The simulator supports setup and evaluation without a physical printer.",
          "Choose the transport that matches your installation. The Windows path uses an installed print queue on a Windows server; the network path needs the configured address and TCP port to be reachable from the server.",
        ],
        bullets: [
          "Windows installed print queues",
          "Configured TCP network connections",
          "Simulator for evaluation and setup",
        ],
        screen: "settings",
      },
      {
        title: "Validate your restaurant hardware",
        paragraphs: [
          "Check server-to-printer reachability, Windows queue names and network addresses. Test actual paper output and Unicode rendering for Myanmar text. No printer-brand compatibility certification is claimed.",
          "Test a full sample receipt and preparation ticket with your actual menu. Myanmar text needs an appropriate font and Unicode rendering path. Check paper layout, copies and station routing as well as whether a job is accepted.",
        ],
        bullets: [
          "Physical receipt and preparation output checked",
          "English and Myanmar glyphs inspected",
          "Local network and power recovery tested",
        ],
        screen: "billing-receipt",
      },
      {
        title: "Choose devices for each station",
        paragraphs: [
          "Browser terminals still need reliable access to the application. Use a current supported browser and a screen size suited to the station, with wired connections for fixed equipment where practical.",
        ],
        bullets: [
          "Desktop or laptop for cashier and manager",
          "Tablet browser for waitstaff",
          "Appropriately sized kitchen and bar displays",
        ],
        screen: "waiter",
      },
    ],
    diagram: "hardware",
    takeaways: [
      "Server-side printer transports",
      "Supported browser workstations",
      "Hardware tested in your installation",
    ],
    guide: "docs/deployment-lan.md",
    related: [
      {
        label: "Read the product guide",
        href: "docs/deployment-lan.md",
      },
      {
        label: "Explore all features",
        href: "/features",
      },
      {
        label: "Ask about custom support",
        href: "/contact?intent=support",
      },
    ],
  },
  security: {
    eyebrow: "ACCESS & ACCOUNTABILITY",
    title: "Give each team member the access they need.",
    description:
      "Authenticated sessions, role permissions and active account checks protect implemented operational features.",
    blocks: [
      {
        title: "Accounts and sessions",
        paragraphs: [
          "Passwords are PBKDF2-hashed before storage. Session tokens are stored as hashes, and session lifetime is configurable. Inactive users cannot authenticate; deactivation also invalidates authenticated access.",
          "Give staff individual accounts so access and supported audit events have a useful actor identity. Change bootstrap access before opening the installation to production use, and deactivate accounts that should no longer be available.",
        ],
        bullets: [
          "PBKDF2 password hashing",
          "Hashed, revocable session tokens",
          "Account status checked during authentication",
        ],
        screen: "users",
      },
      {
        title: "Roles grounded in restaurant work",
        paragraphs: [
          "Implemented operational roles include waitstaff, cashier, kitchen, bar, shift_lead, inventory_clerk, manager, admin and superadmin. Specialized report permissions also support financial_analyst, operations_analyst, loss_prevention and inventory_accountant. Protected API checks and role-aware navigation govern access.",
          "Front-of-house and preparation roles have different responsibilities. Waitstaff capture orders and review bills; cashier permissions cover collection and closeout. Kitchen and bar roles update preparation progress. Managers and administrators receive broader operational permissions.",
        ],
        bullets: [
          "Named operational roles with server checks",
          "Multiple-role access where configured",
          "Separate reporting and administrative capabilities",
        ],
        screen: "settings",
      },
      {
        title: "Know what changed and when",
        paragraphs: [
          "Audit records associate supported sensitive operations with actors and context. Use the audit viewer for operational traceability and troubleshooting. The website does not claim immutable logs or independent security certification.",
          "The audit viewer helps investigate what happened around a supported operation. Read the actor, action and available context alongside the restaurant records; an audit entry is useful evidence, not a promise of immutable storage.",
        ],
        bullets: [
          "Supported administrative and operational events",
          "Actor and contextual details",
          "Audit viewing restricted to authorized accounts",
        ],
        screen: "audit",
      },
      {
        title: "Secure deployment still matters",
        paragraphs: [
          "Application controls work alongside operating-system configuration, database security, network segmentation, firewall rules, TLS at the reverse proxy, backups and operational practices. Rotate bootstrap access and use named staff accounts.",
          "Keep your own infrastructure practices aligned with the application’s controls. Restrict database and server access, use secure reverse-proxy configuration where appropriate and decide who is responsible for updates and recovery.",
        ],
        bullets: [
          "Review firewall and network segmentation",
          "Use least-privilege database access",
          "Maintain tested backups and named operator access",
        ],
        screen: null,
      },
    ],
    takeaways: [
      "Authenticated, active accounts",
      "Permission checks at API boundaries",
      "Operational audit context",
    ],
    guide: "docs/rbac-matrix.md",
    related: [
      {
        label: "Read the product guide",
        href: "docs/rbac-matrix.md",
      },
      {
        label: "Explore all features",
        href: "/features",
      },
      {
        label: "Ask about custom support",
        href: "/contact?intent=support",
      },
    ],
  },
  "solutions/restaurants": {
    eyebrow: "FOR TABLE-SERVICE RESTAURANTS",
    title: "One connected flow from table to closeout.",
    description:
      "Support the people taking orders, preparing food and drinks, collecting payment and reviewing the day.",
    blocks: [
      {
        title: "Start on the floor",
        paragraphs: [
          "Waitstaff open a table session, build an order and add quantities, modifiers and item notes. The order stays on the shared local system so the cashier and preparation team use the same operational state.",
          "A table session gives the floor a place to organize the guest order. Choose the table, enter guest context and build the menu selection. Keep notes on the relevant items so preparation staff see them in the shared workflow.",
        ],
        bullets: [
          "Table selection and guest context",
          "Menu quantities, item notes and modifiers",
          "Dine-in and supported takeout order entry",
        ],
        screen: "pos-ordering",
      },
      {
        title: "Keep preparation connected",
        paragraphs: [
          "Kitchen and bar teams use separate browser queues. Item-level preparing and ready updates let floor staff review progress without passing handwritten tickets around.",
          "Send each item to the station assigned in the menu. A mixed food-and-drink order can support separate kitchen and bar work, while the floor checks preparation progress before returning to the table.",
        ],
        bullets: [
          "Kitchen and bar station queues",
          "Preparing and ready item updates",
          "Waitstaff progress review",
        ],
        screen: "waiter-progress",
      },
      {
        title: "Finish with a clear bill",
        paragraphs: [
          "Generate the bill, handle splits, discounts and configured taxes, record payment and produce a receipt. Managers can review implemented reports, menu configuration and audit activity.",
          "Billing uses the restaurant’s configured pricing and tax settings. Review the bill, handle supported splits and discounts, record payment and produce a receipt before closing a paid table.",
        ],
        bullets: [
          "Bill calculation and supported splits",
          "Payment recording and debt settlement",
          "Receipt generation and configured printing",
        ],
        screen: "billing-receipt",
      },
      {
        title: "Review the shift and prepare the next one",
        paragraphs: [
          "At the end of service, managers can review reports and audit context while preparing the next day’s menu or account changes. Keep the server, database, printers and restaurant network maintained as part of the same operational plan.",
        ],
        bullets: [
          "Daily summaries and product mix",
          "Menu and user administration",
          "Persistent PostgreSQL deployment and backups",
        ],
        screen: "report-daily-summary",
      },
    ],
    workflow: true,
    takeaways: [
      "Ordering and table service",
      "Connected kitchen and bar",
      "Billing and management review",
    ],
    guide: "userguide.md",
    related: [
      {
        label: "Read the product guide",
        href: "userguide.md",
      },
      {
        label: "Explore all features",
        href: "/features",
      },
      {
        label: "Ask about custom support",
        href: "/contact?intent=support",
      },
    ],
  },
  "solutions/cafes": {
    eyebrow: "FOR CAFES & COUNTER SERVICE",
    title: "Keep the counter and preparation connected.",
    description:
      "Use existing cashier, takeout, billing and menu workflows for a cafe deployment without a separate native terminal app.",
    blocks: [
      {
        title: "Build an order at the counter",
        paragraphs: [
          "Cashier order entry supports menu selection, quantities, notes and takeout orders. Preparation station assignments connect relevant drinks and food to kitchen or bar queues.",
          "A counter workflow can use the existing takeout order mode as well as table sessions. Use menu categories and availability controls to keep order entry organized for the items your cafe actually serves.",
        ],
        bullets: [
          "Counter and takeout order workflows",
          "Menu quantities and notes",
          "Food and drink preparation station assignments",
        ],
        screen: "pos-ordering",
      },
      {
        title: "Close the bill and print the receipt",
        paragraphs: [
          "Generate bills and record payment with configured taxes and discounts. Receipt printing uses the server’s configured transport; gateway integration is not implied by payment recording.",
          "Check the guest’s selection before generating the bill, then record payment using the supported billing workflow. Separate payment recording from any external card terminal process your cafe operates.",
        ],
        bullets: [
          "Configured discounts and taxes",
          "Payment collection recorded in the bill",
          "Receipt generation and server-side printing",
        ],
        screen: "billing-receipt",
      },
      {
        title: "Manage the menu behind service",
        paragraphs: [
          "Update menu items, categories, availability and prices. Use validated Excel import for existing menu data, then review inventory movements and supported daily reports.",
          "Make a price or availability change in menu administration and review its effect on the ordering screen. For an existing catalog, validate an Excel workbook and inspect the proposed changes before confirming the import.",
        ],
        bullets: [
          "Items, categories and availability",
          "Prices and preparation stations",
          "Validated transactional Excel import",
        ],
        screen: "menu-admin",
      },
      {
        title: "See the counter and back office together",
        paragraphs: [
          "Inventory movements and low-stock visibility help staff follow the items behind the counter. Daily summaries and product mix give managers a view of recorded activity without introducing a separate cafe-only feature set.",
        ],
        bullets: [
          "Recorded stock movement",
          "Low-stock threshold review",
          "Daily and item/category reporting",
        ],
        screen: "report-product-mix",
      },
    ],
    takeaways: [
      "Counter and takeout ordering",
      "Receipts and menu administration",
      "Stock visibility and reporting",
    ],
    guide: "userguide.md",
    related: [
      {
        label: "Read the product guide",
        href: "userguide.md",
      },
      {
        label: "Explore all features",
        href: "/features",
      },
      {
        label: "Ask about custom support",
        href: "/contact?intent=support",
      },
    ],
  },
  "solutions/multi-location": {
    eyebrow: "FOR RESTAURANT GROUPS",
    title: "Local operations. A considered connection.",
    description:
      "Plan location-specific deployments, branch-aware data and optional menu synchronization. Understand the scope before designing a restaurant-group rollout.",
    blocks: [
      {
        title: "Each restaurant has a local deployment",
        paragraphs: [
          "A location runs its own SYM POS server and PostgreSQL database. Browser terminals depend on that location’s LAN, keeping core local workflows separate from optional cloud connectivity.",
          "Each location’s devices connect to that restaurant’s server. This deployment boundary is important when planning connectivity, printer routing and operational recovery across a group.",
        ],
        bullets: [
          "A local application at each restaurant",
          "PostgreSQL persistence per deployment",
          "Independent local-network availability",
        ],
        screen: "tables",
      },
      {
        title: "Branch IDs and Store IDs define partitions",
        paragraphs: [
          "Operational records are branch-scoped. Synchronization uses Store ID partitions, which must agree with the local branch and cloud assignment. Use stable identifiers throughout the rollout.",
          "Treat partition identifiers as deployment configuration, not labels to change casually. A mismatch between local branch identity and the assigned cloud Store ID needs investigation before synchronization is relied on.",
        ],
        bullets: [
          "Stable branch and Store ID assignments",
          "Partition checks and diagnostics",
          "Documented configuration per location",
        ],
        screen: "cloud-sync",
      },
      {
        title: "Current bidirectional scope: menu data",
        paragraphs: [
          "Menu categories and items can synchronize between local and cloud deployments using durable queues, deterministic conflict handling and snapshot reconciliation. Health diagnostics and manual controls support operation.",
          "The synchronization worker runs independently of local cashier requests. Queued menu events and snapshot reconciliation help exchange menu changes when the configured peer is reachable, with diagnostics for operators to inspect.",
        ],
        bullets: [
          "Bidirectional menu categories and items",
          "Durable delivery and snapshot reconciliation",
          "Health and manual synchronization controls",
        ],
        screen: "menu-admin",
      },
      {
        title: "Plan around the implemented scope",
        paragraphs: [
          "Branch-aware architecture and selective cloud surfaces are not a complete centralized HQ management product. This site does not advertise full live transaction replication, centralized inventory or a comprehensive group analytics portal.",
          "Evaluate the actual workflow you need before planning a rollout. If you require a new group-level report or integration, describe it as a custom support discussion so feasibility can be assessed against the existing code.",
        ],
        bullets: [
          "Current menu scope explained explicitly",
          "No full HQ-management promise",
          "Custom changes scoped before implementation",
        ],
        screen: "reports",
      },
    ],
    diagram: "cloud",
    takeaways: [
      "Location-specific deployment",
      "Stable partition configuration",
      "Current bidirectional menu scope",
    ],
    guide: "docs/cloud-sync-configuration.md",
    related: [
      {
        label: "Read the product guide",
        href: "docs/cloud-sync-configuration.md",
      },
      {
        label: "Explore all features",
        href: "/features",
      },
      {
        label: "Ask about custom support",
        href: "/contact?intent=support",
      },
    ],
  },
};
