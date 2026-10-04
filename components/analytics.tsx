import Script from "next/script";
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_ID?.trim();
  if (!domain || !/^([a-z0-9-]+\.)+[a-z]{2,}$/i.test(domain)) return null;
  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
