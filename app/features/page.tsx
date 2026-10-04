import { PageHero } from "@/components/detail-page";
import { features } from "@/content/features";
import { solutions } from "@/content/solutions";
import {
  SectionHeading,
  ProductScreenshot,
  ArchitectureDiagram,
  CTASection,
  Button,
} from "@/components/product";
import { metadata as createMetadata } from "@/lib/seo";
export const metadata = createMetadata(
  "Restaurant platform features",
  "Explore verified ordering, tables, preparation, billing, inventory, menu and reporting workflows.",
  "/features",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="THE RESTAURANT PLATFORM"
        title="Every station. One connected operation."
        description="The implemented tools for your front of house, preparation teams and back office, connected through your restaurant’s local network."
        path="/features"
      />
      <section className="section">
        {features.map((f) => (
          <article id={f.id} className="detail-block" key={f.id}>
            <SectionHeading
              eyebrow={f.label}
              title={f.title}
              description={f.description}
            />
            <ProductScreenshot
              src={`/product/${f.screen}.webp`}
              alt={`Actual ${f.label} product screen`}
              caption="Actual product screen · Sample evaluation data"
            />
          </article>
        ))}
        <SectionHeading
          eyebrow="PLATFORM"
          title="A shared local foundation"
          description="Browser workspaces, PostgreSQL persistence, English/Myanmar resources, permission-based access and audit history. Optional bidirectional cloud menu synchronization is available where configured."
        />
        <ArchitectureDiagram />
        <div className="article-grid">
          {solutions.map((s) => (
            <article className="info-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div style={{ marginTop: 20 }}>
                <Button href={s.href} secondary>
                  Explore solution
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
