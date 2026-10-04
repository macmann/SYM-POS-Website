import { PageHero } from "@/components/detail-page";
import { SectionHeading, Button, CTASection } from "@/components/product";
import { CommunitySection } from "@/components/community";
import { resources } from "@/content/resources";
import {
  gettingStarted,
  contributionGuidance,
} from "@/content/getting-started";
import { site } from "@/content/site";
import { ArrowUpRight, Github } from "lucide-react";
import { metadata as createMetadata } from "@/lib/seo";
export const metadata = createMetadata(
  "Documentation, setup & contribution",
  "Explore the open-source SYM POS guides for local evaluation, restaurant deployment, menu import, permissions and contribution.",
  "/docs",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="LEARN, DEPLOY AND CONTRIBUTE"
        title="Practical guides. From the source to your first shift."
        description="Find the product documentation for restaurant staff, operators and developers. Start with an evaluation, plan a persistent installation and explore the implementation behind each workflow."
        path="/docs"
        actions={false}
      />
      <section className="section">
        <SectionHeading
          eyebrow="CHOOSE YOUR NEXT STEP"
          title="Start small. Understand the installation."
        />
        <div className="article-grid">
          {gettingStarted.map((step, i) => (
            <article className="info-card" key={step.title}>
              <p className="eyebrow">0{i + 1} — GETTING STARTED</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <div className="page-guide">
          <h2>Application setup and website setup are separate.</h2>
          <p>
            The guides below describe the RestaurantPOS application. This public
            site has its own source, dependencies, deployment and environment. A
            local product installation runs the Node.js application and
            PostgreSQL; a browser at each restaurant station connects to that
            server.
          </p>
          <Button href={`${site.github}/blob/main/README.md`} secondary>
            Read the product README
          </Button>
        </div>
      </section>
      <section className="section">
        <SectionHeading
          eyebrow="PRODUCT DOCUMENTATION"
          title="The details behind each workflow"
          description="Read the operational guide first, then use the focused documents for deployment and configuration. Check instructions against the product version you are evaluating."
        />
        <div className="resource-grid" style={{ marginTop: 30 }}>
          {resources.map(([title, path, description]) => (
            <a
              className="resource-card"
              href={path ? `${site.github}/blob/main/${path}` : site.github}
              key={title}
            >
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              {path ? <ArrowUpRight size={20} /> : <Github size={20} />}
            </a>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeading
          eyebrow="CONTRIBUTING TO SYM POS"
          title="Useful feedback starts with a clear example."
          description="You can help by reporting reproducible issues, suggesting practical restaurant improvements, reviewing code or contributing a focused change. Follow the current repository guidance when participating."
        />
        <div className="article-grid contribution-grid">
          {contributionGuidance.map(([title, text]) => (
            <article className="info-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="reading-links">
          <a href={`${site.github}/issues`} className="text-link">
            Browse GitHub issues
            <ArrowUpRight size={16} />
          </a>
          <a href={`${site.github}/pulls`} className="text-link">
            Review pull requests
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
      <CommunitySection />
      <CTASection />
    </>
  );
}
