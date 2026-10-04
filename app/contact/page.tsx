import { SupportSection } from "@/components/community";
import { site } from "@/content/site";
import { GitHubLink } from "@/components/community";
import { PageHero } from "@/components/detail-page";
import { ContactForm } from "@/components/contact-form";
import { contactEmail } from "@/lib/contact";
import { safeUrl } from "@/lib/env";
import { metadata as createMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
export const metadata = createMetadata(
  "Contact us for custom support",
  "Discuss custom support for SYM POS installation, local deployment, printers, workflow configuration or custom development.",
  "/contact",
);
export default function Page() {
  const webhook = safeUrl(process.env.CONTACT_WEBHOOK_URL);
  return (
    <>
      <PageHero
        eyebrow="CUSTOM SUPPORT FOR AN OPEN-SOURCE PROJECT"
        title="Need help making SYM POS fit your restaurant?"
        description="SYM POS is open source. Contact us for help with deployment, configuration or custom development, or to arrange a guided walkthrough. Share the size of your operation and the workflows your team needs."
        path="/contact"
        actions={false}
      />
      <SupportSection />
      <section className="section contact-layout">
        <aside>
          <h2>Tell us what you want to achieve.</h2>
          <p>
            Tell us about your tables, counter, preparation stations and
            locations. We’ll use those details to scope a product walkthrough or
            implementation discussion.
          </p>
          <p>
            Include your product version, operating system and current
            deployment approach if you already run SYM POS. For a custom change,
            explain the workflow and the outcome you need; feasibility,
            availability and scope can then be discussed.
          </p>
          <p>
            For a reproducible product bug,{" "}
            <a className="text-link" href={`${site.github}/issues`}>
              open a GitHub issue
            </a>{" "}
            with sanitized details. Keep passwords, database credentials and
            customer records out of both issues and this form.
          </p>
          <div className="callout">
            <strong>What to include</strong>Location count, expected browser
            terminals, printer requirements and whether you need an optional
            cloud menu connection.
          </div>
        </aside>
        <ContactForm
          configured={!!webhook && new URL(webhook).protocol === "https:"}
          email={contactEmail()}
        />
      </section>
      <section className="section">
        <h2>Prefer to start on your own?</h2>
        <p className="lede" style={{ marginTop: 20, marginBottom: 25 }}>
          The source and product documentation are available on GitHub. Explore
          an evaluation installation, follow development and give the project a
          star if it helps your restaurant.
        </p>
        <GitHubLink />
      </section>
    </>
  );
}
