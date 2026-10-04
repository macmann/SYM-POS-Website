import { BurmesePage } from "@/components/burmese-page";
import { burmeseMetadata } from "@/lib/burmese-seo";
export const dynamic = "force-dynamic";
export const metadata = burmeseMetadata("/contact");
export default function Page() {
  return <BurmesePage path="/contact" />;
}
