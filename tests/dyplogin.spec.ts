import { test } from "@playwright/test";

// test.use({ ignoreHTTPSErrors: true });

test("Verify the login functionality", async ({ page }) => {
  await page.goto("https://fl-htgqa-dyp-sb-02.hhstechgroup.com/");
  
  await page.locator("#username").fill("");
  await page.locator("#password").fill("Pass@123");
  await page.locator('button[type="submit"]').click();
  await page.locator("//span[text()='Agree']/..").click();
  await page.waitForTimeout(2000);
});
