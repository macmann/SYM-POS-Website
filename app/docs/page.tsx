import { PageHero } from "@/components/detail-page";
import { resources } from "@/content/resources";
import { site } from "@/content/site";
import { ArrowUpRight } from "lucide-react";
import { metadata as createMetadata } from "@/lib/seo";
export const metadata = createMetadata(
  "Documentation & resources",
  "Read SYM POS product documentation, LAN deployment, menu import, billing rules and cloud synchronization guides.",
  "/docs",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCT RESOURCES"
        title="Practical guides. From setup to service."
        description="Read the product documentation in the RestaurantPOS repository. The marketing website is a separate application and never depends on the POS runtime."
        path="/docs"
        actions={false}
      />
      <section className="section">
        <div className="resource-grid">
          {resources.map(([title, path, description]) => (
            <a
              key={title}
              className="resource-card"
              href={path ? `${site.github}/blob/main/${path}` : site.github}
            >
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
        <div className="callout">
          <strong>Documentation and implementation evolve.</strong>The website’s
          PRODUCT_CAPABILITIES.md records the reference commit audited for these
          marketing claims. Confirm product setup against the version you
          deploy.
        </div>
      </section>
    </>
  );
}
