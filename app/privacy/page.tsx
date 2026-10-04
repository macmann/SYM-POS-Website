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
