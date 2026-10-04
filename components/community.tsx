import Link from "next/link";
import {
  Github,
  Star,
  Code2,
  BookOpen,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";
import { site } from "@/content/site";
import { SectionHeading, Button } from "@/components/product";
export function GitHubLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={compact ? "github-link" : "button button-dark github-button"}
      href={site.github}
    >
      <Github size={compact ? 17 : 19} />
      <span>Star on GitHub</span>
      <Star size={compact ? 14 : 16} />
    </a>
  );
}
export function CommunitySection() {
  return (
    <section className="section community-section">
      <div>
        <SectionHeading
          eyebrow="OPEN SOURCE. BUILT IN THE OPEN."
          title="A restaurant platform you can explore, run and help improve."
          description="SYM POS is an open-source restaurant operations project. Explore the implementation, follow its development and use the documentation to evaluate a local installation. If it’s useful to you, give the project a star on GitHub."
        />
        <div className="hero-actions">
          <GitHubLink />
          <Button href="/docs" secondary>
            Read the documentation
          </Button>
        </div>
      </div>
      <div className="community-actions">
        {[
          [
            Code2,
            "Explore the source",
            "Read the application code and see how workflows are implemented.",
            site.github,
          ],
          [
            BookOpen,
            "Share useful feedback",
            "Report reproducible issues with your product version and deployment context.",
            `${site.github}/issues`,
          ],
          [
            MessagesSquare,
            "Help the project grow",
            "Suggest improvements, discuss changes and contribute through GitHub.",
            `${site.github}/pulls`,
          ],
        ].map(([Icon, title, text, href]) => {
          const I = Icon as typeof Code2;
          return (
            <a key={String(title)} href={String(href)}>
              <I size={21} />
              <div>
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </div>
              <ArrowUpRight size={16} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
export const supportAreas = [
  {
    title: "Installation & deployment",
    description:
      "Discuss local server setup, PostgreSQL persistence, browser stations, network access and backup planning.",
  },
  {
    title: "Workflow configuration",
    description:
      "Get help planning tables, menu structure, preparation stations, permissions and receipt settings.",
  },
  {
    title: "Hardware & localization",
    description:
      "Discuss your printer transports, display devices and English/Myanmar font and label requirements.",
  },
  {
    title: "Custom development",
    description:
      "Describe a workflow change or integration you need. We can discuss feasibility and agree a scope before work begins.",
  },
];
export function SupportSection() {
  return (
    <section className="section support-section">
      <SectionHeading
        eyebrow="CUSTOM SUPPORT, WHEN YOU NEED IT"
        title="Open source software. Help tailored to your restaurant."
        description="Start with the code and documentation. If you need help deploying, configuring or adapting SYM POS, contact us with your requirements. Support and custom development are discussed separately from the open-source project."
      />
      <div className="article-grid support-grid">
        {supportAreas.map((area) => (
          <article className="info-card" key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
      <Link className="text-link" href="/contact?intent=support">
        Discuss custom support <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
