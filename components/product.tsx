import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Monitor,
  Tablet,
  ChefHat,
  Coffee,
  Laptop,
  Server,
  Database,
  Cloud,
  Printer,
  Check,
  UtensilsCrossed,
  Receipt,
  Package,
  ChartNoAxesCombined,
  BookOpen,
} from "lucide-react";
import { features } from "@/content/features";
import { faq } from "@/content/faq";
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-outline" : "button-dark"}`}
    >
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="lede">{description}</p>}
    </div>
  );
}
export function ProductScreenshot({
  src,
  alt,
  caption,
  priority = false,
  chrome = true,
  sizes = "(max-width: 767px) 90vw, (max-width: 1200px) 50vw, 700px",
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  chrome?: boolean;
  sizes?: string;
}) {
  return (
    <figure className="product-shot">
      {chrome && (
        <div className="browser-chrome">
          <span />
          <span />
          <span />
          <small>SYM POS · Product preview</small>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        priority={priority}
        sizes={sizes}
        fetchPriority={priority ? "high" : undefined}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
export function ArchitectureDiagram({ cloud = true }: { cloud?: boolean }) {
  const clients = [
    ["Cashier", Monitor],
    ["Waitstaff", Tablet],
    ["Kitchen", ChefHat],
    ["Bar", Coffee],
    ["Manager", Laptop],
  ] as const;
  return (
    <div className="architecture">
      <div className="diagram-label">
        <span className="status-dot" />
        RESTAURANT LOCAL NETWORK
      </div>
      <div className="device-row">
        {clients.map(([label, Icon]) => (
          <div className="device" key={label}>
            <Icon size={24} />
            <span>{label}</span>
            <small>Browser</small>
          </div>
        ))}
      </div>
      <div className="connection-lines" aria-hidden="true" />
      <div className="server-node">
        <div className="server-icon">
          <Server size={26} />
        </div>
        <div>
          <strong>Local SYM POS server</strong>
          <span>
            Node.js application <i>+</i> PostgreSQL <Database size={14} />
          </span>
        </div>
        <Check size={20} />
      </div>
      <p className="diagram-note">Core workflows stay on your LAN</p>
      {cloud && (
        <>
          <div className="optional-line" />
          <div className="cloud-node">
            <Cloud size={24} />
            <div>
              <strong>Optional cloud connection</strong>
              <span>Current bidirectional scope: menu data</span>
            </div>
            <span className="badge">OPTIONAL</span>
          </div>
        </>
      )}
    </div>
  );
}
export function HardwareDiagram() {
  return (
    <div className="hardware-diagram">
      <div className="server-node">
        <Server />
        <strong>SYM POS server</strong>
      </div>
      <div className="connection-lines" />
      <div className="device-row">
        {["Receipt", "Kitchen", "Bar"].map((label) => (
          <div className="device" key={label}>
            <Printer />
            <strong>{label} printer</strong>
          </div>
        ))}
      </div>
      <p className="diagram-note">
        Configured Windows queue · TCP network · Simulator
      </p>
    </div>
  );
}
export function CloudDiagram() {
  return (
    <div className="cloud-diagram">
      <div className="device">
        <Server />
        <strong>Location A</strong>
        <small>Local POS + PostgreSQL</small>
      </div>
      <div className="sync-line">
        ↔<small>Menu sync</small>
      </div>
      <div className="device cloud-center">
        <Cloud />
        <strong>Cloud deployment</strong>
        <small>Store ID partitions</small>
      </div>
      <div className="sync-line">
        ↔<small>Menu sync</small>
      </div>
      <div className="device">
        <Server />
        <strong>Location B</strong>
        <small>Local POS + PostgreSQL</small>
      </div>
    </div>
  );
}
const icons = {
  UtensilsCrossed,
  ChefHat,
  Receipt,
  Package,
  ChartNoAxesCombined,
  BookOpen,
};
export function FeatureGrid() {
  return (
    <div className="feature-grid">
      {features.map((f, i) => {
        const Icon = icons[f.icon];
        return (
          <Link
            className="feature-card"
            href={
              ["ordering", "billing", "menu"].includes(f.id)
                ? `/features#${f.id}`
                : `/${f.id}`
            }
            key={f.id}
          >
            <div className="card-top">
              <Icon size={24} />
              <span>0{i + 1}</span>
            </div>
            <h3>{f.label}</h3>
            <p>{f.description}</p>
            <span className="card-link">
              Explore {f.label.toLowerCase()} <ArrowUpRight size={16} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function Workflow() {
  return (
    <ol className="workflow">
      {[
        ["Select a table", "Open a table session or takeout order."],
        ["Build the order", "Add menu items, quantities and notes."],
        ["Send to preparation", "Kitchen and bar see station items."],
        ["Track progress", "Follow preparing and ready updates."],
        ["Complete billing", "Generate a bill, record payment and close."],
      ].map(([title, text], i) => (
        <li key={title}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  );
}
export function FAQ() {
  return (
    <div className="faq">
      {faq.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function CTASection() {
  return (
    <section className="cta-section">
      <div>
        <p className="eyebrow">
          <span />
          LET’S TALK RESTAURANT OPERATIONS
        </p>
        <h2>
          Ready for a better
          <br />
          way to run your restaurant?
        </h2>
        <p>
          See how ordering, preparation, billing and management work together.
        </p>
      </div>
      <div className="cta-buttons">
        <Button href="/contact?intent=demo">Request a Demo</Button>
        <Link href="/features">
          Explore Features <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
