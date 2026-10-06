import { test, expect } from "@playwright/test";

test("download navigation, installation guidance and language switch", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Download", exact: true }).click();
  await expect(page).toHaveURL(/\/download$/);
  await expect(page.getByRole("link", { name: "Open download folder" })).toHaveAttribute("href", "https://drive.google.com/drive/folders/1j1qoG8mFsEq4eKxQAwf2uld9cxBufn_t?usp=sharing");
  await expect(page.locator("main")).toContainText("Run as administrator");
  for (const script of ["install_sym_pos.bat", "start_sym_pos_hidden.bat", "update_sym_pos.bat", "restart_sym_pos.bat", "uninstall_sym_pos.bat"]) {
    await expect(page.locator("main")).toContainText(script);
  }
  await expect(page.locator("main")).toContainText("PostgreSQL data is preserved by default");
  await page.getByRole("link", { name: "Switch to Burmese" }).click();
  await expect(page).toHaveURL(/\/my\/download$/);
  await expect(page.locator("main")).toContainText("install_sym_pos.bat");
  await expect(page.locator("main a[href*='drive.google.com']")).toHaveCount(1);
  await page.getByRole("link", { name: "Switch to English" }).click();
  await expect(page).toHaveURL(/\/download$/);
});
