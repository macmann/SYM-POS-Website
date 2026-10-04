import { DetailPage } from "@/components/detail-page";
import { pages } from "@/content/pages";
import { metadata as createMetadata } from "@/lib/seo";
const content = pages["kitchen-display"];
export const metadata = createMetadata(
  content.title,
  content.description,
  "/kitchen-display",
);
export default function Page() {
  return <DetailPage content={content} path="/kitchen-display" />;
}
