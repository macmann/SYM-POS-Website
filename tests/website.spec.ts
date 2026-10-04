import { test, expect } from "@playwright/test";
import { routes } from "../content/seo";
test("homepage, FAQ and CTAs work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Run your restaurant",
  );
  await page
    .getByRole("link", { name: "Explore SYM POS", exact: true })
    .click();
  await expect(page).toHaveURL(/\/features$/);
  await page.goto("/");
  const question = page
    .locator(".faq summary")
    .filter({ hasText: "Does SYM POS need Internet access?" });
  await question.click();
  await expect(question.locator("..")).toHaveAttribute("open", "");
  await expect(page.locator("body")).toContainText(
    "provided devices can reach",
  );
  await question.click();
  await expect(question.locator("..")).not.toHaveAttribute("open", "");
});
test("all routes have title, canonical and primary heading", async ({
  page,
}) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("title")).not.toBeEmpty();
    await expect(page.locator("link[rel=canonical]")).toHaveCount(1);
  }
});
test("mobile navigation opens, closes and supports Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Hardware", exact: true })
    .click();
  await expect(page).toHaveURL(/hardware/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});
test("keyboard product dropdown", async ({ page }) => {
  await page.goto("/");
  const summary = page
    .locator("summary")
    .filter({ hasText: "Product" })
    .first();
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("link", { name: "Table Service", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(summary).toBeFocused();
  await expect(summary.locator("..")).not.toHaveAttribute("open", "");
});
test("demo uses guided request when public URL is absent", async ({ page }) => {
  await page.goto("/demo");
  await expect(
    page.getByRole("link", { name: "Request a Demo", exact: true }).first(),
  ).toHaveAttribute("href", "/contact?intent=demo");
  await expect(
    page.getByRole("link", { name: "Launch Live Demo" }),
  ).toHaveCount(0);
});
test("contact validation and honest delivery fallback", async ({
  page,
  request,
}) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send request" }).click();
  await expect(page.locator(".contact-form").getByRole("alert")).toContainText(
    "review",
  );
  await expect(page.getByLabel("Name", { exact: true })).toBeFocused();
  await page.getByLabel("Name", { exact: true }).fill("Test Person");
  await page.getByLabel("Restaurant / Company").fill("Test Cafe");
  await page.getByLabel("Email", { exact: true }).fill("test@example.com");
  await page.getByLabel("Country", { exact: true }).fill("Myanmar");
  await page.getByLabel("Number of Locations").fill("1");
  await page.getByLabel("Approximate POS Terminals").fill("3");
  await page
    .getByLabel("Message", { exact: true })
    .fill("Please arrange a guided product walkthrough.");
  await page.getByRole("button", { name: "Send request" }).click();
  await expect(page.locator(".contact-form").getByRole("alert")).toContainText(
    "No message has been sent",
  );
  const res = await request.post("/api/contact", { data: { email: "bad" } });
  expect(res.status()).toBe(400);
  const cross = await request.post("/api/contact", {
    headers: { origin: "https://external.invalid" },
    data: {},
  });
  expect(cross.status()).toBe(403);
});
test("no horizontal overflow at target widths", async ({ page }) => {
  test.setTimeout(120000);
  for (const width of [320, 375, 430, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${route} at ${width}`,
      ).toBe(true);
    }
  }
});
test("no broken internal links, console or hydration errors", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  const hrefs = await page
    .locator("a")
    .evaluateAll((nodes) =>
      nodes
        .map((n) => n.getAttribute("href"))
        .filter((v): v is string => !!v && v.startsWith("/")),
    );
  for (const href of new Set(hrefs)) {
    const res = await request.get(href.split("#")[0]);
    expect(res.status(), href).toBeLessThan(400);
  }
  expect(errors).toEqual([]);
});
test("accessibility scan and Myanmar font rendering", async ({ page }) => {
  const { default: AxeBuilder } = await import("@axe-core/playwright");
  test.setTimeout(90000);
  for (const route of routes) {
    await page.goto(route);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
      route,
    ).toEqual([]);
  }
  await page.goto("/");
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (const img of Array.from(document.images)) img.loading = "eager";
    await Promise.all(Array.from(document.images).map((img) => img.decode()));
  });
  expect(
    await page.evaluate(() =>
      document.fonts.check('16px "Noto Sans Myanmar"', "မြန်မာ"),
    ),
  ).toBe(true);
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
});

test("contact delivery acceptance, upstream failure and repeat protection", async () => {
  const { POST } = await import("../app/api/contact/route");
  const previousUrl = process.env.CONTACT_WEBHOOK_URL;
  const previousFetch = globalThis.fetch;
  const payload = {
    name: "Evaluation User",
    company: "Synthetic Cafe",
    email: "delivery-test@example.invalid",
    phone: "",
    country: "Myanmar",
    locations: "1",
    terminals: "2",
    message: "Please arrange a sample walkthrough.",
    website: "",
  };
  const makeRequest = (email = payload.email) =>
    new Request("http://website.invalid/api/contact", {
      method: "POST",
      headers: {
        host: "website.invalid",
        origin: "http://website.invalid",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload, email }),
    });
  try {
    process.env.CONTACT_WEBHOOK_URL =
      "https://delivery.example.invalid/inquiries";
    let deliveries = 0;
    globalThis.fetch = async (_input, init) => {
      deliveries++;
      expect(JSON.parse(String(init?.body)).company).toBe(payload.company);
      return new Response(null, { status: 204 });
    };
    expect((await POST(makeRequest())).status).toBe(200);
    expect((await POST(makeRequest())).status).toBe(429);
    expect(deliveries).toBe(1);
    globalThis.fetch = async () => new Response(null, { status: 500 });
    expect(
      (await POST(makeRequest("failure-test@example.invalid"))).status,
    ).toBe(502);
    globalThis.fetch = async () => {
      throw new Error("Unreachable receiver");
    };
    expect(
      (await POST(makeRequest("network-test@example.invalid"))).status,
    ).toBe(502);
    delete process.env.CONTACT_WEBHOOK_URL;
    expect(
      (await POST(makeRequest("unconfigured-test@example.invalid"))).status,
    ).toBe(503);
  } finally {
    globalThis.fetch = previousFetch;
    if (previousUrl === undefined) delete process.env.CONTACT_WEBHOOK_URL;
    else process.env.CONTACT_WEBHOOK_URL = previousUrl;
  }
});

test("configured demo resolves to real URL and invalid URLs fall back", async () => {
  const { getDemoCTA } = await import("../lib/demo");
  expect(getDemoCTA("https://demo.example.invalid")).toEqual({
    href: "https://demo.example.invalid",
    label: "Launch Live Demo",
  });
  expect(getDemoCTA()).toEqual({
    href: "/contact?intent=demo",
    label: "Request a Demo",
  });
  expect(getDemoCTA("javascript:alert(1)").href).toBe("/contact?intent=demo");
});

test("open-source navigation and removed pricing", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Star on GitHub" }).first(),
  ).toHaveAttribute("href", "https://github.com/macmann/RestaurantPOS");
  await expect(
    page.getByRole("link", { name: "Contact Us", exact: true }).first(),
  ).toHaveAttribute("href", "/contact");
  await expect(page.locator('a[href="/pricing"]')).toHaveCount(0);
  expect((await request.get("/pricing")).status()).toBe(404);
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).not.toContain("/pricing");
  await page.goto("/contact");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Need help",
  );
});

test("enriched pages have real screenshot galleries and source links", async ({
  page,
  request,
}) => {
  for (const route of [
    "/kitchen-display",
    "/inventory",
    "/reports",
    "/hardware",
    "/security",
    "/solutions/restaurants",
    "/solutions/cafes",
    "/solutions/multi-location",
    "/demo",
  ]) {
    await page.goto(route);
    expect(await page.locator(".product-shot").count()).toBeGreaterThanOrEqual(
      3,
    );
    const sources = await page
      .locator(".product-shot>a")
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
    for (const src of new Set(sources)) {
      const res = await request.get(src!);
      expect(res.status(), src!).toBe(200);
    }
  }
});
