import { test, expect } from "@playwright/test";

//Test Data
const searchItems = ["laptop", "Gift card", "smartphone", "book"];

//Here it will considered as 4 tests because we are passing 4 values in an array the tests will depend on how many values we are providing

//Using for of loop
// for (const item of searchItems) {
//   test(`Search test for ${item}`, async ({ page }) => {
//     await page.goto("https://demowebshop.tricentis.com/");
//     await page.locator("#small-searchterms").fill(item);
//     await page.locator("input[type='submit']").click();
//     await expect.soft(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true });
//   });
// }

//Using for each loop
searchItems.forEach((item) => {
  test(`Search test for ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[type='submit']").click();
    await expect.soft(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true });
  });
});

