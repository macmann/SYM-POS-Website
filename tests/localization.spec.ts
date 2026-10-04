import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { routes } from "../content/seo";
import { localizedHref } from "../lib/locale";

test("all Burmese routes render localized HTML, metadata and links", async ({
  page,
  request,
}) => {
  for (const route of routes) {
    const path = localizedHref(route, "my");
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", "my");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText(/[\u1000-\u109f]/);
    await expect(page).toHaveTitle(/[\u1000-\u109f]/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`${path === "/my" ? "/my" : path}$`),
    );
    await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
    await expect(page.locator('link[hreflang="my"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      "content",
      "my_MM",
    );
    const localLinks = await page
      .locator('main a[href^="/"]')
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")!));
    expect(
      localLinks.filter(
        (h) => !h.startsWith("/my") && !h.startsWith("/product/"),
      ),
      path,
    ).toEqual([]);
    const screenshots = await page
      .locator(".product-shot>a")
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")!));
    for (const src of new Set(screenshots))
      expect((await request.get(src)).status(), src).toBe(200);
  }
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const route of routes)
    expect(sitemap).toContain(localizedHref(route, "my"));
  expect((await request.get("/my/pricing")).status()).toBe(404);
  expect((await request.get("/my/missing-page")).status()).toBe(404);
});

test("language switch preserves page, query and anchor in both directions", async ({
  page,
}) => {
  await page.goto("/features?from=nav#billing");
  await page.getByRole("link", { name: "Switch to Burmese" }).click();
  await expect(page).toHaveURL(/\/my\/features\?from=nav#billing$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "my");
  await page.getByRole("link", { name: "Switch to English" }).click();
  await expect(page).toHaveURL(/\/features\?from=nav#billing$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("Burmese mobile menu, FAQ and font work", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/my");
  const toggle = page.getByRole("button", { name: "လမ်းညွှန်ဖွင့်ရန်" });
  await toggle.click();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation", { name: "ပင်မလမ်းညွှန်" })
    .getByRole("link", { name: "စက်ပစ္စည်းများ", exact: true })
    .click();
  await expect(page).toHaveURL(/\/my\/hardware$/);
  await page.goto("/my");
  const question = page.locator(".faq summary").first();
  await question.click();
  await expect(question.locator("..")).toHaveAttribute("open", "");
  const font = await page.evaluate(async () => {
    await document.fonts.ready;
    return {
      family: getComputedStyle(document.body).fontFamily,
      loaded: document.fonts.check('15px "Noto Sans Myanmar"', "မြန်မာ"),
    };
  });
  expect(font.family).toContain("Noto Sans Myanmar");
  expect(font.loaded).toBe(true);
});

test("Burmese contact validation and delivery messages are localized", async ({
  page,
}) => {
  await page.goto("/my/contact");
  await page.getByRole("button", { name: "တောင်းဆိုချက်ပေးပို့ရန်" }).click();
  await expect(page.locator(".contact-form").getByRole("alert")).toContainText(
    "အမှတ်အသားပြထားသော",
  );
  await expect(page.locator("#name-error")).toContainText("အမည် ဖြည့်ရန်");
  await page.locator('[name="name"]').fill("မောင်မောင်");
  await page.locator('[name="company"]').fill("မြန်မာစားသောက်ဆိုင်");
  await page.locator('[name="email"]').fill("burmese@example.invalid");
  await page.locator('[name="country"]').fill("မြန်မာ");
  await page.locator('[name="locations"]').fill("1");
  await page.locator('[name="terminals"]').fill("3");
  await page
    .locator('[name="message"]')
    .fill("မြန်မာစာပရင်တာနှင့် ဆိုင်တပ်ဆင်မှုအတွက် အကူအညီလိုပါသည်။");
  await page.getByRole("button", { name: "တောင်းဆိုချက်ပေးပို့ရန်" }).click();
  await expect(page.locator(".contact-form").getByRole("alert")).toContainText(
    "မည်သည့်စာမျှ မပေးပို့ရသေးပါ",
  );
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    }),
  );
  await page.getByRole("button", { name: "တောင်းဆိုချက်ပေးပို့ရန်" }).click();
  await expect(
    page.getByRole("button", { name: "ပေးပို့ပြီးပါပြီ", exact: true }),
  ).toBeDisabled();
  await expect(page.locator(".contact-form").getByRole("status")).toContainText(
    "သင့်တောင်းဆိုချက်ကို ပေးပို့ပြီးပါပြီ",
  );
});

test("Burmese pages pass accessibility and responsive checks", async ({
  page,
}) => {
  test.setTimeout(120000);
  for (const route of routes) {
    const path = localizedHref(route, "my");
    await page.goto(path);
    await page.setViewportSize({ width: 1440, height: 1000 });
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(result.violations, path).toEqual([]);
    for (const width of [320, 375, 430, 768, 1024, 1100, 1280, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      );
      expect(overflow, `${path} at ${width}px`).toBe(false);
    }
  }
});
