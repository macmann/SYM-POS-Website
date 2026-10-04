import type { MetadataRoute } from "next";
import { routes } from "@/content/seo";
import { site } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: site.url + path,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
