import { SiteLayout, metadata as base } from "@/components/site-layout";
export const metadata = base;
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
