import { PageHero } from "@/components/detail-page";
import {
  Button,
  ProductScreenshot,
  CTASection,
  SectionHeading,
} from "@/components/product";
import { CommunitySection } from "@/components/community";
import { site } from "@/content/site";
import { CloudDemo } from "@/components/cloud-demo";
import { tour } from "@/content/tour";
import { Check } from "lucide-react";
import { metadata as createMetadata } from "@/lib/seo";
export const metadata = createMetadata(
  "Explore the SYM POS workflow",
  "Follow actual SYM POS screens through ordering, preparation, billing and reports. Try the cloud demo at demo.sympos.site with the public demo account.",
  "/demo",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="A WALKTHROUGH OF REAL RESTAURANT WORK"
        title="See the whole shift, one workspace at a time."
        description="Explore actual SYM POS screens with synthetic evaluation data. Follow an order from the floor to preparation, payment and management review, then try the open-source application yourself."
        path="/demo"
        actions={false}
      />
      <section className="section">
        <CloudDemo />
        {tour.map((step, i) => (
          <article className="detail-block enriched-block" key={step.title}>
            <div className="section-copy">
              <SectionHeading
                eyebrow={`0${i + 1} — THE DEMO JOURNEY`}
                title={step.title}
                description={step.description}
              />
              <ul className="check-list">
                {step.checks.map((c) => (
                  <li key={c}>
                    <Check />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <ProductScreenshot
              src={`/product/${step.screen}.webp`}
              alt={`Actual SYM POS demo: ${step.title}`}
              caption="Actual SYM POS screen · Synthetic evaluation data"
            />
          </article>
        ))}
        <div className="page-guide">
          <h2>Evaluate locally, then plan production.</h2>
          <p>
            Start with the installation instructions in the product repository.
            In-memory mode is useful for a disposable walkthrough and loses data
            when the process stops. A real restaurant installation needs
            persistent PostgreSQL, secure accounts, backups and a reliable local
            network.
          </p>
          <div className="hero-actions">
            <Button href={`${site.github}/blob/main/README.md`} secondary>
              Read installation instructions
            </Button>
            <Button href="/contact?intent=support" secondary>
              Ask about custom support
            </Button>
          </div>
        </div>
      </section>
      <CommunitySection />
      <CTASection />
    </>
  );
}
