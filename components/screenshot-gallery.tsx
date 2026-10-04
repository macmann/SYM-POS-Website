import { ProductScreenshot, SectionHeading } from "@/components/product";
export type GalleryItem = {
  screen: string;
  title: string;
  description: string;
};
export function ScreenshotGallery({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
}) {
  return (
    <section className="section">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className="screenshot-grid">
        {items.map((item) => (
          <article key={item.screen}>
            <h3>{item.title}</h3>
            <ProductScreenshot
              src={`/product/${item.screen}.webp`}
              alt={`SYM POS ${item.title.toLowerCase()} with synthetic evaluation data`}
              caption="Actual product screen · Sample evaluation data"
            />
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
