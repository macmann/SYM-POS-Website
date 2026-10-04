import { DetailPage } from "@/components/detail-page";
import { pages } from "@/content/pages";
import { metadata as createMetadata } from "@/lib/seo";
const content = pages["solutions/restaurants"];
export const metadata = createMetadata(
  content.title,
  content.description,
  "/solutions/restaurants",
);
export default function Page() {
  return <DetailPage content={content} path="/solutions/restaurants" />;
}
