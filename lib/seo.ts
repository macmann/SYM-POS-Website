import type { Metadata } from "next";
import { site } from "@/content/site";
export function metadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        en: path,
        my: path === "/" ? "/my" : `/my${path}`,
        "x-default": path,
      },
    },
    openGraph: {
      title: `${title} | SYM POS`,
      description,
      url: site.url + path,
      type: "website",
      locale: "en_US",
      alternateLocale: ["my_MM"],
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
