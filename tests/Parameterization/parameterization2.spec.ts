import { test, expect } from "@playwright/test";

const loginData = [
  ["laura.taylor1234@example.com", "test123", "valid"],
  ["invaliduser@example.com", "test123", "invalid"],
  ["validuser@example.com", "testxyz", "invalid"],
  [" ", " ", "invalid"],
];

test.describe("Login data driven testing", async () => {
  for (const [email, password, validity] of loginData) {
    test(`Login Test for ${email} and ${password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator("input[type='submit']").last().click();

      if (validity.toLowerCase() === "valid") {
        const logOut = page.locator("a[href='/logout']");
        await expect(logOut).toBeVisible({ timeout: 5000 });
      } else {
        const errorMessage = page.locator(".validation-summary-errors");
        await expect(errorMessage).toBeVisible();
        await expect.soft(errorMessage).toContainText("Login was unsuccessful");
      }
    });
  }
});
