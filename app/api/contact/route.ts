import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact";
import { safeUrl } from "@/lib/env";
export const runtime = "nodejs";
const recent = new Map<string, number>();
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  // Next.js may use an internal origin behind a reverse proxy. The browser
  // Origin must match the actual incoming Host, never an arbitrary forwarded URL.
  let sameOrigin = !origin;
  if (origin) {
    try {
      const source = new URL(origin);
      sameOrigin =
        ["http:", "https:"].includes(source.protocol) &&
        source.host === request.headers.get("host");
    } catch {
      sameOrigin = false;
    }
  }
  if (!sameOrigin)
    return NextResponse.json(
      { error: "This request must come from the website." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return NextResponse.json({ error: "Use a JSON request." }, { status: 415 });
  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return NextResponse.json(
      { error: "Could not read request." },
      { status: 400 },
    );
  }
  if (new TextEncoder().encode(raw).length > 16000)
    return NextResponse.json(
      { error: "Your request is too large." },
      { status: 413 },
    );
  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const { data, errors } = validateContact(payload);
  if (data.website)
    return NextResponse.json(
      { error: "Could not deliver this request." },
      { status: 400 },
    );
  if (Object.keys(errors).length)
    return NextResponse.json(
      { error: "Please review your fields.", fields: errors },
      { status: 400 },
    );
  const webhook = safeUrl(process.env.CONTACT_WEBHOOK_URL);
  if (!webhook)
    return NextResponse.json(
      {
        error:
          "Web submissions are not configured yet. Use the contact email on this page if available. No message has been sent.",
      },
      { status: 503 },
    );
  if (new URL(webhook).protocol !== "https:")
    return NextResponse.json(
      {
        error: "Contact delivery is unavailable. Please use the contact email.",
      },
      { status: 503 },
    );
  const now = Date.now();
  for (const [key, time] of recent) if (now - time > 60000) recent.delete(key);
  const key = data.email.toLowerCase();
  if (recent.has(key) || recent.size >= 1000)
    return NextResponse.json(
      { error: "Please wait a minute before sending another request." },
      { status: 429 },
    );
  recent.set(key, now);
  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        website: undefined,
        source: "SYM POS marketing website",
      }),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok) throw new Error("Delivery failed");
    return NextResponse.json({ ok: true });
  } catch {
    recent.delete(key);
    return NextResponse.json(
      {
        error:
          "The delivery service did not accept your request. No delivery has been confirmed. Please try again or use the contact email.",
      },
      { status: 502 },
    );
  }
}
