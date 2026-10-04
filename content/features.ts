export const features = [
  {
    id: "ordering",
    label: "Front of house",
    title: "From table to kitchen without the paperwork",
    description:
      "Select a table, build an order with quantities, notes and modifiers, and send items to preparation. Cashier and waitstaff browser workflows keep service connected.",
    screen: "pos-ordering",
    icon: "UtensilsCrossed",
  },
  {
    id: "kitchen-display",
    label: "Kitchen & bar",
    title: "Keep preparation teams in sync",
    description:
      "Separate kitchen and bar queues show item notes and preparation progress. Move items to preparing or ready, with station printing where configured.",
    screen: "kitchen-display",
    icon: "ChefHat",
  },
  {
    id: "billing",
    label: "Billing & payments",
    title: "Billing built for real service",
    description:
      "Generate bills, split payments, apply discounts and configurable taxes, record payments, settle debt and print receipts. Payment recording does not imply an integrated payment gateway.",
    screen: "billing",
    icon: "Receipt",
  },
  {
    id: "inventory",
    label: "Inventory",
    title: "Know what’s moving behind the counter",
    description:
      "Track inventory records, stock movements and low-stock thresholds. Optional menu-to-inventory links connect configured items to stock usage.",
    screen: "inventory",
    icon: "Package",
  },
  {
    id: "reports",
    label: "Management & reports",
    title: "See the shift. Understand the day.",
    description:
      "Review business-day summaries, product mix, station activity and exception reports. Export report data to CSV or prepare a print view.",
    screen: "reports",
    icon: "ChartNoAxesCombined",
  },
  {
    id: "menu",
    label: "Menu management",
    title: "Your menu, on your terms",
    description:
      "Manage items, categories, prices and preparation stations. Import .xlsx workbooks with validation and a preview before confirming transactional changes. Up to 5,000 rows and 5 MB per import.",
    screen: "menu-admin",
    icon: "BookOpen",
  },
] as const;
