import { PageHero } from "@/components/detail-page";
import { metadata as createMetadata } from "@/lib/seo";
export const metadata = createMetadata(
  "Privacy notice",
  "Legal template requiring organization approval before launch.",
  "/privacy",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL TEMPLATE — REVIEW REQUIRED"
        title="Privacy notice"
        description="This page is a placeholder and must be reviewed and replaced with organization-approved legal text before production launch."
        path="/privacy"
        actions={false}
      />
      <article className="page-content">
        <div className="legal-banner">
          Not final legal text. Organization details, processing practices and
          applicable terms require legal review.
        </div>
        {[
          [
            "Organization and scope",
            "Confirm the legal operator, contact details, applicable jurisdiction and scope of this website before publication.",
          ],
          [
            "Contact requests",
            "Review how inquiry data is delivered to the configured contact endpoint, who receives it, retention and deletion procedures.",
          ],
          [
            "Analytics and cookies",
            "No analytics tracker is loaded by default. Review this notice if analytics or other integrations are introduced.",
          ],
          [
            "Open-source links and external services",
            "GitHub links open the product repository, issues or pull requests. A configured live demo is hosted separately. The operator must identify any external providers, their responsibilities and applicable privacy notices before publication.",
          ],
          [
            "Custom support inquiries",
            "The inquiry form collects contact and restaurant details to support a deployment or custom-development discussion. Specify the responsible operator, processing purpose, retention period, recipient services and deletion process in the approved notice.",
          ],
          [
            "Security and data handling",
            "Website submissions use the configured server-side delivery endpoint. No POS database or operational records are required by this site. The operator must document deployed logging, access controls and any hosting-provider processing in the final notice.",
          ],
          [
            "Review before launch",
            "Replace this template with organization-approved legal text. This page does not establish final legal commitments.",
          ],
        ].map(([title, text]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </article>
    </>
  );
}
