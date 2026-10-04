import { PageHero } from "@/components/detail-page";
import { Button, ProductScreenshot, CTASection } from "@/components/product";
import { demoHref, demoLabel, site } from "@/content/site";
import { metadata as createMetadata } from "@/lib/seo";
export const metadata = createMetadata(
  "See SYM POS in action",
  "Follow a restaurant demo from sign-in and table selection to preparation, billing and reports.",
  "/demo",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="SEE THE WORKFLOW"
        title="See SYM POS in action."
        description="Walk through a restaurant shift, from the first table to the final receipt. Explore how the floor, preparation team and cashier connect."
        path="/demo"
        actions={false}
      />
      <section className="section detail-block">
        <div>
          <h2>Follow an order through service.</h2>
          <ol
            className="demo-journey"
            style={{ paddingLeft: 20, marginTop: 25 }}
          >
            {[
              "Sign in with the appropriate role",
              "Select a table",
              "Add menu items and notes",
              "Send the order to preparation",
              "Review the kitchen queue",
              "Update preparation status",
              "Generate the bill",
              "Record payment",
              "View supported reports",
            ].map((x) => (
              <li key={x} style={{ padding: "6px 0", fontSize: 13 }}>
                {x}
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 25 }}>
            <Button href={demoHref}>{demoLabel}</Button>
          </div>
          {!site.demo && (
            <p className="callout">
              A public live demo is not configured yet. Request a guided
              walkthrough using the contact page.
            </p>
          )}
        </div>
        <ProductScreenshot
          src="/product/waiter.webp"
          alt="Actual SYM POS waiter ordering view"
          caption="Actual product screen · Sample evaluation data"
        />
      </section>
      <CTASection />
    </>
  );
}
