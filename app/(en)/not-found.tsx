import { Button } from "@/components/product";
export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>Let’s get you back to service.</h1>
      <p>The page you requested could not be found.</p>
      <Button href="/">Back to SYM POS</Button>
    </section>
  );
}
