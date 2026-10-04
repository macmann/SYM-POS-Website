import { safeUrl } from "./env";
export function getDemoCTA(value?: string) {
  const url = safeUrl(value);
  return {
    href: url || "/contact?intent=demo",
    label: url ? "Launch Live Demo" : "Request a Demo",
  };
}
