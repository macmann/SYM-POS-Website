import { PageHero } from "@/components/detail-page";
import { ContactForm } from "@/components/contact-form";
import { contactEmail } from "@/lib/contact";
import { safeUrl } from "@/lib/env";
import { metadata as createMetadata } from "@/lib/seo";
export const dynamic = "force-dynamic";
export const metadata = createMetadata(
  "Contact sales & request a demo",
  "Tell us about your restaurant and discuss a SYM POS demo, hardware, local installation and support.",
  "/contact",
);
export default function Page() {
  const webhook = safeUrl(process.env.CONTACT_WEBHOOK_URL);
  return (
    <>
      <PageHero
        eyebrow="LET’S TALK ABOUT YOUR RESTAURANT"
        title="A better service flow starts with a conversation."
        description="Request a demo or discuss your local deployment. Share the size of your operation and the workflows your team needs."
        path="/contact"
        actions={false}
      />
      <section className="section contact-layout">
        <aside>
          <h2>Built around your operation.</h2>
          <p>
            Tell us about your tables, counter, preparation stations and
            locations. We’ll use those details to scope a product walkthrough or
            implementation discussion.
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
    </>
  );
}
