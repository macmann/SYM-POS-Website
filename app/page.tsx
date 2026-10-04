import Link from "next/link";
import { CommunitySection, SupportSection } from "@/components/community";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { screenshotGroups } from "@/content/screenshots";
import {
  ArrowUpRight,
  Check,
  Network,
  WifiOff,
  ChefHat,
  Receipt,
  ShieldCheck,
  Globe,
  Server,
  BookOpen,
  Languages,
} from "lucide-react";
import {
  Button,
  SectionHeading,
  ProductScreenshot,
  ArchitectureDiagram,
  FeatureGrid,
  Workflow,
  FAQ,
  CTASection,
  CloudDiagram,
  HardwareDiagram,
} from "@/components/product";
import { features } from "@/content/features";
import { faq } from "@/content/faq";
import { site } from "@/content/site";
import { metadata as createMetadata } from "@/lib/seo";
export const metadata = createMetadata(
  "Restaurant operations that keep working locally",
  "SYM POS connects restaurant ordering, tables, kitchen and bar, billing, inventory and reports over your local network.",
  "/",
);
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SYM POS",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Browser",
              description: site.tagline,
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.company,
              url: site.url,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            OPEN-SOURCE · LOCAL-FIRST RESTAURANT OPERATIONS
          </p>
          <h1>
            Run your restaurant.
            <br />
            <span>
              Not your Internet
              <br className="desktop-break" /> connection.
            </span>
          </h1>
          <p className="hero-description">
            From the first order to the last bill. One open-source platform for
            your floor, kitchen, counter and back office—built to work on your
            restaurant’s local network.
          </p>
          <div className="hero-actions">
            <Button href="/features">Explore SYM POS</Button>
            <Button href="/demo" secondary>
              View Demo
            </Button>
          </div>
          <p className="hero-source-note">
            Explore the code, self-host a local installation and help the
            project grow. <a href={site.github}>Star SYM POS on GitHub.</a>
          </p>
          <div className="hero-checks">
            <span>
              <Check size={15} />
              Browser-based
            </span>
            <span>
              <Check size={15} />
              Local-first
            </span>
            <span>
              <Check size={15} />
              Your infrastructure
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-topline">
            <span>
              <span className="status-dot" />
              ONE CONNECTED RESTAURANT
            </span>
            <span>01 — THE PLATFORM</span>
          </div>
          <div className="hero-product-preview">
            <ProductScreenshot
              src="/product/pos-ordering.webp"
              alt="Actual SYM POS order entry screen with sample restaurant data"
              chrome={false}
              priority
            />
          </div>
          <div className="visual-bottomline">
            <Network size={16} />
            <span>Connected by your LAN</span>
            <span className="tiny-pill">PUBLIC INTERNET OPTIONAL</span>
          </div>
          <div className="hero-visual-caption">
            Actual SYM POS screen · Sample evaluation data.
          </div>
        </div>
      </section>
      <div className="platform-strip">
        <span>
          THE WHOLE RESTAURANT.
          <br />
          <strong>ONE SHARED WORKFLOW.</strong>
        </span>
        {[
          "Ordering & tables",
          "Kitchen & bar",
          "Billing & payments",
          "Inventory & reports",
        ].map((x, i) => (
          <div key={x}>
            <span className="strip-number">0{i + 1}</span>
            {x}
          </div>
        ))}
      </div>
      <section className="section intro-section">
        <div className="section-intro">
          <SectionHeading
            eyebrow="EVERY STATION. SAME SYSTEM."
            title="One system across the restaurant"
            description="Less passing information around. More keeping service moving. Give every team a connected workspace for the work in front of them."
          />
          <Link className="text-link" href="/features">
            Meet your restaurant platform <ArrowUpRight size={17} />
          </Link>
        </div>
        <FeatureGrid />
      </section>
      <section className="local-section section">
        <div className="local-copy">
          <p className="eyebrow">
            <span />
            BUILT FOR THE WAY RESTAURANTS WORK
          </p>
          <h2>
            Your service shouldn’t stop
            <br />
            when the Internet does.
          </h2>
          <p>
            Run SYM POS on a local restaurant server with PostgreSQL. Your
            cashier, waiters, kitchen, bar and managers connect through ordinary
            browsers on the same network.
          </p>
          <div className="local-points">
            <div>
              <WifiOff />
              <span>
                <strong>Public Internet is optional</strong>Core workflows can
                continue over your LAN.
              </span>
            </div>
            <div>
              <Network />
              <span>
                <strong>One local source of truth</strong>Terminals connect to
                the restaurant server.
              </span>
            </div>
            <div>
              <Server />
              <span>
                <strong>Infrastructure you control</strong>Persistent data in
                your PostgreSQL deployment.
              </span>
            </div>
          </div>
          <Button href="/offline-first">See how local-first works</Button>
          <p className="small-note">
            Local server, database and network availability still matter.
          </p>
        </div>
        <ArchitectureDiagram />
      </section>
      <section className="section">
        <SectionHeading
          eyebrow="FROM FIRST ORDER TO FINAL RECEIPT"
          title="A smoother journey through service"
          description="One connected flow for the people taking orders, preparing them and closing the bill."
        />
        <Workflow />
      </section>
      <section className="section product-section">
        <div className="product-section-copy">
          <p className="eyebrow">
            <span />
            MADE FOR THE FLOOR
          </p>
          <h2>
            Good service starts
            <br />
            with a clear order.
          </h2>
          <p>
            Select a table, add menu items and capture the details that matter.
            Item notes and modifiers follow the order into preparation, while
            your team tracks its progress.
          </p>
          <ul className="check-list">
            <li>
              <Check />
              Table sessions and takeout orders
            </li>
            <li>
              <Check />
              Quantities, item notes and modifiers
            </li>
            <li>
              <Check />
              Preparation progress from the floor
            </li>
          </ul>
          <Link className="text-link" href="/solutions/restaurants">
            Explore table service <ArrowUpRight size={17} />
          </Link>
        </div>
        <ProductScreenshot
          src="/product/pos-ordering.webp"
          alt="SYM POS ordering screen with sample restaurant data"
          caption="Ordering workspace · Actual product screen, sample data"
        />
      </section>
      <section className="section kitchen-section">
        <div className="kitchen-heading">
          <SectionHeading
            eyebrow="CLEAR ORDERS. COORDINATED PREPARATION."
            title="Keep the kitchen and bar in sync"
            description="Station-specific queues, item notes and preparation status help each team see what needs attention."
          />
          <Button href="/kitchen-display" secondary>
            Explore Kitchen Operations
          </Button>
        </div>
        <ProductScreenshot
          src="/product/kitchen-display.webp"
          sizes="(max-width: 1440px) 90vw, 1310px"
          alt="Actual SYM POS kitchen preparation queue with sample orders"
          caption="Kitchen preparation queue · Actual product screen, sample data"
        />
        <div className="kitchen-benefits">
          <span>
            <ChefHat />
            Separate station queues
          </span>
          <span>
            <Check />
            Preparing & ready states
          </span>
          <span>
            <Receipt />
            Configured preparation printers
          </span>
        </div>
      </section>
      <ScreenshotGallery
        eyebrow="THE WORKFLOW, IN THE PRODUCT"
        title="From your floor to the final receipt"
        description="Explore actual SYM POS workspaces, captured from a local evaluation with sample menu items, tables and orders. Open any image for a full-size view."
        items={screenshotGroups.service}
      />
      <section className="section operations-section">
        <SectionHeading
          eyebrow="BEYOND THE ORDER"
          title="The details that keep a restaurant running"
          description="Close the bill, understand your stock and see how the day is going."
        />
        <div className="operations-grid">
          {features.slice(2, 5).map((f) => (
            <article key={f.id}>
              <span className="eyebrow">{f.label}</span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              <Link
                href={f.id === "billing" ? "/features#billing" : `/${f.id}`}
                className="text-link"
              >
                Explore {f.label.toLowerCase()} <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section menu-section">
        <div>
          <BookOpen size={32} />
          <SectionHeading
            eyebrow="MENU MANAGEMENT"
            title="Change the menu. Keep everything connected."
            description="Manage categories, items, prices and preparation stations. Bring an existing menu into SYM POS with a validated Excel import."
          />
          <Link href="/features#menu" className="text-link">
            Explore menu management <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="import-card">
          <div>
            <span className="file-icon">XLSX</span>
            <span className="badge">UP TO 5,000 ROWS</span>
          </div>
          <h3>
            A considered import.
            <br />
            No surprises.
          </h3>
          <ol>
            {[
              "Upload your workbook",
              "Validate the menu data",
              "Review creates and updates",
              "Confirm transactional import",
            ].map((x, i) => (
              <li key={x}>
                <span>{i + 1}</span>
                {x}
                <Check size={16} />
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="section-intro">
          <SectionHeading
            eyebrow="YOUR DEVICES. CONNECTED."
            title="One browser. Every station."
            description="Cashier desktop, waiter tablet, kitchen display or manager laptop. Supported devices reach the same local application through a browser."
          />
          <Link href="/hardware" className="text-link">
            Explore hardware <ArrowUpRight size={16} />
          </Link>
        </div>
        <HardwareDiagram />
      </section>
      <section className="section cloud-section">
        <SectionHeading
          eyebrow="CONNECTED ON YOUR TERMS"
          title="Local where service happens. Connected when you need it."
          description="Optional synchronization connects local POS and cloud deployments. Current bidirectional synchronization supports menu data, backed by durable queues, reconciliation and health diagnostics."
        />
        <CloudDiagram />
        <Link className="text-link" href="/solutions/multi-location">
          Understand the multi-location architecture <ArrowUpRight size={16} />
        </Link>
      </section>
      <ScreenshotGallery
        eyebrow="A CLOSER LOOK AT MANAGEMENT"
        title="The tools behind a well-run shift"
        description="Review restaurant stock, understand recorded activity, keep the menu current and investigate supported operational changes from browser-based administration workspaces."
        items={screenshotGroups.management}
      />
      <section className="section trust-grid">
        <article>
          <Languages />
          <h3>Built for multilingual teams</h3>
          <p>
            English and Myanmar UI resources, localized labels and editable
            mappings.
          </p>
          <div className="language-pills">
            <span>English</span>
            <span lang="my">မြန်မာ</span>
          </div>
        </article>
        <article>
          <ShieldCheck />
          <h3>Access that fits the role</h3>
          <p>
            Authenticated sessions, active account controls and permission
            checks protect operational features.
          </p>
          <Link href="/security" className="text-link">
            Users, roles & audit <ArrowUpRight size={16} />
          </Link>
        </article>
        <article>
          <Globe />
          <h3>Your installation, your plan</h3>
          <p>
            Self-host with persistent PostgreSQL storage. Plan backups, server
            access and network availability.
          </p>
          <Link href="/docs" className="text-link">
            Read deployment guides <ArrowUpRight size={16} />
          </Link>
        </article>
      </section>
      <ScreenshotGallery
        eyebrow="LANGUAGE AND PRINTING"
        title="Configure the details your team works with"
        description="English and Myanmar resources support multilingual teams. Plan the browser labels and physical receipt rendering together; Myanmar output needs compatible fonts and a Unicode-capable printing path."
        items={screenshotGroups.localization}
      />
      <CommunitySection />
      <SupportSection />
      <section className="section faq-section">
        <SectionHeading
          eyebrow="A FEW PRACTICAL ANSWERS"
          title="Before you get started"
        />
        <FAQ />
      </section>
      <CTASection />
    </>
  );
}
