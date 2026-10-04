import { PageHero } from "@/components/detail-page";
import { pricing } from "@/content/pricing";
import { Button, FAQ, CTASection } from "@/components/product";
import { Check } from "lucide-react";
import { metadata as createMetadata } from "@/lib/seo";
export const metadata = createMetadata(
  "Deployment & pricing",
  "Discuss SYM POS pricing based on location count, implementation, hardware and support requirements.",
  "/pricing",
);
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="A PLAN THAT FITS YOUR RESTAURANT"
        title="Start with your operation. Build the right plan."
        description="Pricing depends on deployment size, implementation requirements, hardware, support and number of restaurant locations. Contact us for a scoped proposal."
        path="/pricing"
        actions={false}
      />
      <section className="section">
        <div className="price-grid">
          {pricing.map((p) => (
            <article className="price-card" key={p.title}>
              <p className="price-tag">PRICING ON REQUEST</p>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <ul className="check-list">
                {p.items.map((x) => (
                  <li key={x}>
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>
              <Button href={p.href}>{p.cta}</Button>
            </article>
          ))}
        </div>
        <div className="callout">
          <strong>Plan software and infrastructure together.</strong>Server
          hardware, devices, printers, network setup, implementation and support
          should be discussed before deployment. No fixed fees or inclusions are
          assumed here.
        </div>
      </section>
      <section className="section faq-section">
        <h2>A few practical answers</h2>
        <FAQ />
      </section>
      <CTASection />
    </>
  );
}
