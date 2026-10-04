export const screenshotGroups = {
  service: [
    {
      screen: "tables",
      title: "A shared view of the floor",
      description:
        "Select a table session and review its service context before taking the next order.",
    },
    {
      screen: "waiter-progress",
      title: "Preparation progress on the floor",
      description:
        "Follow the status of submitted items from a browser workspace connected to the same local server.",
    },
    {
      screen: "bar-display",
      title: "A separate bar queue",
      description:
        "Drink items reach the station assigned in the menu, with their quantities and preparation notes.",
    },
    {
      screen: "billing-receipt",
      title: "A clear receipt at closeout",
      description:
        "Review calculated lines, discounts and configured tax in the actual receipt preview before printing.",
    },
  ],
  management: [
    {
      screen: "inventory",
      title: "Inventory behind the counter",
      description:
        "Review records, current balances and low-stock visibility for the inventory you maintain.",
    },
    {
      screen: "report-product-mix",
      title: "Item and category activity",
      description:
        "Use product mix reporting to examine recorded activity in the period you select.",
    },
    {
      screen: "menu-admin",
      title: "Menu control in one place",
      description:
        "Maintain categories, prices, availability and station assignments; validate Excel imports before confirming.",
    },
    {
      screen: "audit",
      title: "Operational context when you need it",
      description:
        "Review supported audit events with their actor and available context to investigate changes.",
    },
  ],
  localization: [
    {
      screen: "localization",
      title: "English and Myanmar labels",
      description:
        "Manage the branch language and editable label mappings in the actual localization workspace.",
    },
    {
      screen: "printers",
      title: "Receipts and station printing",
      description:
        "Keep restaurant receipt information and printer setup aligned with the selected transport and fonts.",
    },
  ],
};
export const featureDetails: Record<
  string,
  { text: string; bullets: string[] }
> = {
  ordering: {
    text: "Use table sessions for dine-in service and the supported takeout workflow for counter orders. Quantity changes, notes and modifiers belong to the order, so staff can keep the detail together as service moves between stations.",
    bullets: [
      "Table selection and guest context",
      "Menu selection, quantities and item detail",
      "Authoritative server state shared across workspaces",
    ],
  },
  "kitchen-display": {
    text: "Menu station assignments determine where preparation items appear. Kitchen and bar operators update item-level progress, while the floor can review the same preparation state. Active work and ready history have separate views.",
    bullets: [
      "Kitchen and bar station queues",
      "Queued, preparing and ready progress",
      "Configured preparation-ticket printing",
    ],
  },
  billing: {
    text: "Review the bill calculation, handle supported splits and apply configured tax and discounts. Record collection, settle outstanding debt where authorized and review a receipt before closing a paid table. Payment recording is separate from third-party gateway processing.",
    bullets: [
      "Bill generation and supported splits",
      "Discounts, configurable tax and debt settlement",
      "Payment recording, receipts and configured printing",
    ],
  },
  inventory: {
    text: "Inventory masters and movement records help staff follow the stock they maintain. Define consistent units, review low-stock thresholds and configure optional recipe links deliberately before relying on automatic deductions.",
    bullets: [
      "Inventory records, units and stock movements",
      "Configured low-stock thresholds",
      "Optional menu-to-inventory mappings",
    ],
  },
  reports: {
    text: "Choose a reporting period in the configured restaurant timezone. Review daily summaries, product mix, station activity and operational exceptions. Download supported reports as CSV or use a printable view for a management discussion.",
    bullets: [
      "Daily and business-day reporting context",
      "Item/category and station views",
      "Permission-gated CSV and print tools",
    ],
  },
  menu: {
    text: "Update the catalog without rebuilding the application. For a workbook import, validate the required worksheet and columns, inspect creates and updates, then confirm the transactional import. The documented limit is 5,000 rows and 5 MB.",
    bullets: [
      "Categories, item prices and station assignments",
      "Availability and menu administration",
      "Validation preview before Excel changes are applied",
    ],
  },
};
