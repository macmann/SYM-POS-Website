import {
  Button,
  SectionHeading,
  ProductScreenshot,
  ArchitectureDiagram,
  HardwareDiagram,
  CloudDiagram,
  Workflow,
  CTASection,
} from "@/components/product";
import { CommunitySection } from "@/components/community";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";
export type DetailContent = {
  eyebrow: string;
  title: string;
  description: string;
  blocks: {
    title: string;
    paragraphs: string[];
    bullets: string[];
    screen: string | null;
  }[];
  diagram?: string;
  workflow?: boolean;
  takeaways: string[];
  guide: string;
  related: { label: string; href: string }[];
};
export function PageHero({
  eyebrow,
  title,
  description,
  path,
  actions = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  actions?: boolean;
}) {
  return (
    <section className="page-hero">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: site.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: title,
                item: site.url + path,
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>
          {path
            .split("/")
            .filter(Boolean)
            .map((x) => x.replaceAll("-", " "))
            .join(" / ")}
        </span>
      </nav>
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h1>{title}</h1>
      <p className="lede">{description}</p>
      {actions && (
        <div className="hero-actions">
          <Button href={site.github}>Explore on GitHub</Button>
          <Button href="/contact?intent=support" secondary>
            Contact Us
          </Button>
        </div>
      )}
    </section>
  );
}
export function DetailPage({
  content,
  path,
}: {
  content: DetailContent;
  path: string;
}) {
  return (
    <>
      <PageHero {...content} path={path} />
      <div className="section takeaways">
        {content.takeaways.map((x) => (
          <div key={x}>
            <Check />
            <span>{x}</span>
          </div>
        ))}
      </div>
      <section className="section">
        {content.diagram && (
          <div className="page-diagram">
            <SectionHeading
              eyebrow="THE CONNECTIONS BEHIND THE WORKFLOW"
              title={
                content.diagram === "lan"
                  ? "Inside the restaurant network"
                  : content.diagram === "hardware"
                    ? "From the server to each printer"
                    : "Local deployments, connected by menu data"
              }
            />
            <div style={{ marginTop: 30, marginBottom: 30 }}>
              {content.diagram === "lan" ? (
                <ArchitectureDiagram />
              ) : content.diagram === "hardware" ? (
                <HardwareDiagram />
              ) : (
                <CloudDiagram />
              )}
            </div>
          </div>
        )}
        {content.blocks.map((block, i) => (
          <article
            className={
              block.screen ? "detail-block enriched-block" : "enriched-block"
            }
            key={block.title}
          >
            <div className="section-copy">
              <SectionHeading
                eyebrow={`0${i + 1} — ${content.eyebrow}`}
                title={block.title}
              />
              {block.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <ul className="check-list">
                {block.bullets.map((b) => (
                  <li key={b}>
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {block.screen && (
              <ProductScreenshot
                src={`/product/${block.screen}.webp`}
                alt={`SYM POS ${block.screen.replaceAll("-", " ")} workspace with synthetic evaluation data`}
                caption="Actual SYM POS screen · Sample evaluation data"
              />
            )}
          </article>
        ))}
        {content.workflow && <Workflow />}
        <div className="page-guide">
          <h2>Try the workflow with your own setup in mind.</h2>
          <p>
            Explore the source and product guide, then evaluate with sample data
            before planning production use. If you need help with installation,
            configuration or a custom workflow, contact us with your restaurant
            and device requirements.
          </p>
          <div className="reading-links">
            {content.related.map((link) => (
              <Link
                className="text-link"
                key={link.label}
                href={
                  link.href.startsWith("docs/") || link.href.endsWith(".md")
                    ? `${site.github}/blob/main/${link.href}`
                    : link.href
                }
              >
                {link.label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CommunitySection />
      <CTASection />
    </>
  );
}
