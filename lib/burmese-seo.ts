import type { Metadata } from "next";
import { burmesePages } from "@/content/burmese";
import { metadata as createMetadata } from "@/lib/seo";
import { localizedHref } from "@/lib/locale";
export function burmeseMetadata(path: string): Metadata {
  const content = burmesePages[path];
  if (!content) return {};
  const localized = localizedHref(path, "my");
  const metadata = createMetadata(
    content.title,
    content.description,
    localized,
  );
  return {
    ...metadata,
    alternates: {
      canonical: localized,
      languages: { en: path, my: localized, "x-default": path },
    },
    openGraph: {
      ...metadata.openGraph,
      locale: "my_MM",
      alternateLocale: ["en_US"],
    },
  };
}
