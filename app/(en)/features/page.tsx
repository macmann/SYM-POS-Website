import { PageHero } from "@/components/detail-page";
import { features } from "@/content/features";
import { CommunitySection, SupportSection } from "@/components/community";
import { Check } from "lucide-react";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { featureDetails } from "@/content/screenshots";
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
            <div className="section-copy">
              <SectionHeading
                eyebrow={f.label}
                title={f.title}
                description={f.description}
              />
              <p>{featureDetails[f.id].text}</p>
              <ul className="check-list">
                {featureDetails[f.id].bullets.map((b) => (
                  <li key={b}>
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
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
      <ScreenshotGallery
        eyebrow="THE PEOPLE AND CONFIGURATION BEHIND SERVICE"
        title="Give the team a workspace that fits their role"
        description="Restaurant operation also depends on the floor layout, account permissions and the labels staff read each day. Explore these actual administration screens alongside the operational features."
        items={[
          {
            screen: "table-layout",
            title: "Manage the restaurant floor",
            description:
              "Maintain the table concepts used by front-of-house ordering and service.",
          },
          {
            screen: "users",
            title: "Named users and assigned roles",
            description:
              "Create individual staff accounts and control active access with implemented permissions.",
          },
          {
            screen: "localization",
            title: "English and Myanmar configuration",
            description:
              "Review branch language and editable label mappings; test receipt glyphs on your selected printer.",
          },
          {
            screen: "cloud-sync",
            title: "Optional cloud menu connection",
            description:
              "Review synchronization settings and diagnostics. This evaluation screenshot shows an unconnected setup, not an active production link.",
          },
        ]}
      />
      <CommunitySection />
      <SupportSection />
      <CTASection />
    </>
  );
}
