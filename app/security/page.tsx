import { DetailPage } from "@/components/detail-page";
import { pages } from "@/content/pages";
import { metadata as createMetadata } from "@/lib/seo";
const content = pages["security"];
export const metadata = createMetadata(
  content.title,
  content.description,
  "/security",
);
export default function Page() {
  return <DetailPage content={content} path="/security" />;
}
