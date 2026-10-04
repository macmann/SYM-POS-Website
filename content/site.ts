import { safeUrl, siteUrl } from "@/lib/env";
import { getDemoCTA } from "@/lib/demo";
export const site = {
  name: "SYM POS",
  tagline: "Restaurant operations that keep working locally.",
  url: siteUrl,
  github: safeUrl(
    process.env.NEXT_PUBLIC_GITHUB_URL,
    "https://github.com/macmann/RestaurantPOS",
  )!,
  demo: safeUrl(process.env.NEXT_PUBLIC_DEMO_URL),
  company: process.env.NEXT_PUBLIC_COMPANY_NAME || "SYM POS",
};
const demoCTA = getDemoCTA(site.demo);
export const demoHref = demoCTA.href;
export const demoLabel = demoCTA.label;
