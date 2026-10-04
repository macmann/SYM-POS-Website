import { notFound } from "next/navigation";
import { BurmesePage } from "@/components/burmese-page";
import { burmesePages } from "@/content/burmese";
import { burmeseMetadata } from "@/lib/burmese-seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(burmesePages)
    .filter((path) => path !== "/" && path !== "/contact")
    .map((path) => ({ slug: path.slice(1).split("/") }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return burmeseMetadata(`/${slug.join("/")}`);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  if (!burmesePages[path]) notFound();
  return <BurmesePage path={path} />;
}
