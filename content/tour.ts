export const tour = [
  {
    title: "Start with a table and a clear order",
    screen: "pos-ordering",
    description:
      "Sign in with the appropriate role, select a table session or use the supported takeout workflow, and add menu items. Review quantities, notes and modifiers before sending the order into preparation.",
    checks: [
      "Select the correct table and guest context",
      "Add sample food and drinks from the menu",
      "Review order detail before saving",
    ],
  },
  {
    title: "Follow the order into preparation",
    screen: "kitchen-preparing",
    description:
      "Open the kitchen or bar view to see items assigned to that station. Move a ticket into preparing and then ready. Review the progress from the floor workspace to understand how the teams share local state.",
    checks: [
      "Check kitchen and bar routing",
      "Read quantities and item notes",
      "Compare active work with ready history",
    ],
  },
  {
    title: "Review the bill and record collection",
    screen: "billing-paid",
    description:
      "Generate the guest bill and inspect its calculation. Try supported splits, discounts and configured tax with sample data, then record a payment and review the receipt before closing a paid table.",
    checks: [
      "Inspect bill lines and totals",
      "Record a sample payment",
      "Review the receipt and balance before closeout",
    ],
  },
  {
    title: "Bring the shift into management view",
    screen: "report-daily-summary",
    description:
      "Open reports with an authorized role, choose the restaurant’s reporting period and inspect daily activity. Continue into product mix, station context, menu administration and audit history to see the back-office workflow.",
    checks: [
      "Check reporting dates and timezone",
      "Review daily and item/category activity",
      "Try a supported CSV or printable export",
    ],
  },
];
