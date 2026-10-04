import { PageHero } from "@/components/detail-page";
import { metadata as createMetadata } from "@/lib/seo";
export const metadata = createMetadata(
  "Website terms",
  "Legal template requiring organization approval before launch.",
  "/terms",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL TEMPLATE — REVIEW REQUIRED"
        title="Website terms"
        description="This page is a placeholder and must be reviewed and replaced with organization-approved legal text before production launch."
        path="/terms"
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
            "Product and commercial information",
            "Marketing information describes implemented features at the audited source version. Final license, support, deployment and commercial terms must be provided by the operator.",
          ],
          [
            "External resources",
            "Links to product documentation and a separately hosted demo are external resources. Confirm responsibility and applicable terms for each service.",
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
