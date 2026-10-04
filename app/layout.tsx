import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";
import { Analytics } from "@/components/analytics";
import "@fontsource-variable/inter";
import "@fontsource/noto-sans-myanmar/400.css";
import "@/styles/globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SYM POS — Restaurant operations that keep working locally",
    template: "%s | SYM POS",
  },
  description:
    "Open-source browser-based restaurant POS for ordering, tables, kitchen and bar, billing, inventory and reporting. Core workflows run on your restaurant LAN.",
  icons: { icon: "/brand/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "SYM POS",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
