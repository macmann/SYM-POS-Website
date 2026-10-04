export function safeUrl(
  value: string | undefined,
  fallback?: string,
): string | undefined {
  if (!value?.trim()) return fallback;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol)
      ? url.toString().replace(/\/$/, "")
      : fallback;
  } catch {
    return fallback;
  }
}
export const siteUrl = safeUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
  "http://localhost:3000",
)!;
