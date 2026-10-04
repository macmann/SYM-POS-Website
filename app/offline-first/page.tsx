import { DetailPage } from "@/components/detail-page";
import { pages } from "@/content/pages";
import { metadata as createMetadata } from "@/lib/seo";
const content = pages["offline-first"];
export const metadata = createMetadata(
  content.title,
  content.description,
  "/offline-first",
);
export default function Page() {
  return <DetailPage content={content} path="/offline-first" />;
}
