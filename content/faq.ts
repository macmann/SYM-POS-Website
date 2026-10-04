export const faq = [
  [
    "Does SYM POS need Internet access?",
    "Core restaurant workflows can operate over the local network without continuous public Internet access, provided devices can reach the local SYM POS server and its database.",
  ],
  [
    "Does every terminal need an installation?",
    "Restaurant workstations use a supported web browser. The application and PostgreSQL run on the restaurant server; terminals do not independently save offline orders.",
  ],
  [
    "Can I connect kitchen displays and printers?",
    "Kitchen and bar browser queues are implemented. Receipt and preparation printing supports configured Windows queues, TCP network printers and a simulator. Test your hardware before deployment.",
  ],
  [
    "What synchronizes with the cloud?",
    "Current bidirectional synchronization supports menu data between local POS and cloud deployments, with durable queues and reconciliation. A complete centralized HQ product is not claimed.",
  ],
  [
    "Can I import my menu from Excel?",
    "Yes. Upload a .xlsx workbook with a Bulk Upload worksheet, validate it, review changes and confirm. The documented limit is 5,000 rows and 5 MB.",
  ],
  [
    "Does it support Myanmar language?",
    "English and Myanmar UI resources and editable label mappings are implemented. Myanmar printing requires compatible fonts and a Unicode-capable printer path.",
  ],
  [
    "Can I evaluate or self-host SYM POS?",
    "An in-memory evaluation mode is available, but its data disappears on restart. Persistent production deployments use PostgreSQL and need backups, network planning and secure infrastructure.",
  ],
];
