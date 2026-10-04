import { BurmesePage } from "@/components/burmese-page";
import { burmeseMetadata } from "@/lib/burmese-seo";
export const metadata = burmeseMetadata("/");
export default function Page() {
  return <BurmesePage path="/" />;
}
