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
import Link from "next/link";
import { site } from "@/content/site";
export type DetailContent = {
  eyebrow: string;
  title: string;
  description: string;
  blocks: string[][];
  diagram?: string;
  screen?: string;
  workflow?: boolean;
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
          <Button href="/contact?intent=demo">Request a Demo</Button>
          <Button href="/features" secondary>
            Explore Features
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
      <section className="section">
        {content.diagram && (
          <div style={{ marginBottom: 55 }}>
            {content.diagram === "lan" ? (
              <ArchitectureDiagram />
            ) : content.diagram === "hardware" ? (
              <HardwareDiagram />
            ) : (
              <CloudDiagram />
            )}
          </div>
        )}
        {content.blocks.map(([title, description], i) => (
          <div
            className={i === 0 && content.screen ? "detail-block" : "info-card"}
            style={i === 0 && content.screen ? undefined : { marginBottom: 22 }}
            key={title}
          >
            <div>
              <SectionHeading
                eyebrow={`0${i + 1} — ${content.eyebrow}`}
                title={title}
                description={description}
              />
            </div>
            {i === 0 && content.screen && (
              <ProductScreenshot
                src={`/product/${content.screen}.webp`}
                alt={`Actual SYM POS ${content.screen.replaceAll("-", " ")} screen`}
                caption="Actual product screen · Sample evaluation data"
              />
            )}
          </div>
        ))}
        {content.workflow && <Workflow />}
      </section>
      <CTASection />
    </>
  );
}
