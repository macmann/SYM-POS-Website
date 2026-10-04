import type { MetadataRoute } from "next";
import { routes } from "@/content/seo";
import { site } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((path) =>
    [path, path === "/" ? "/my" : `/my${path}`].map((localizedPath) => ({
      url: site.url + localizedPath,
      alternates: {
        languages: {
          en: site.url + path,
          my: site.url + (path === "/" ? "/my" : `/my${path}`),
        },
      },
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
  );
}
