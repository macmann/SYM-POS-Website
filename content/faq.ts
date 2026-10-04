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
  [
    "Is SYM POS open source?",
    "Yes. Explore the application source and documentation on GitHub, follow development and evaluate a local installation. Refer to the repository for its current licensing and contribution guidance. If the project helps you, please give it a star.",
  ],
  [
    "Do I need a paid plan to explore the project?",
    "This site does not offer subscription tiers or a software pricing page. Start with the open-source repository and documentation. Custom deployment support or development can be discussed separately through Contact Us.",
  ],
  [
    "Can I get help with installation or a custom workflow?",
    "Contact us with your deployment, device and workflow requirements. Installation assistance, configuration and custom development are discussed according to feasibility, scope and availability; no support package or response-time promise is implied.",
  ],
  [
    "Where should I report a bug?",
    "Use the product repository’s GitHub issues for a reproducible problem. Include the version, deployment mode and reproduction steps, and remove passwords, customer data and sensitive configuration from any attachments.",
  ],
  [
    "Can an individual terminal keep taking orders away from the LAN?",
    "The browser needs to reach the local application server. Local-first removes the need for continuous public Internet access; it does not turn every terminal into an independent offline database.",
  ],
];
