//Pre-requisite
//Install the csv-parse module to read the csv files
//npm install csv-parse

import { test, expect } from "@playwright/test";
import fs from 'fs';
import { parse } from 'csv-parse/sync';

const csvPath="tests/testData/data.csv";
const fileContent=fs.readFileSync(csvPath,'utf-8')
//While reading from csv we need to explicitely tell that which type it is.
type LoginRow = {
  email: string;
  password: string;
  validity: string;
};
const records=parse(fileContent,{columns:true,skip_empty_lines:true}) as LoginRow[]

test.describe("Login data driven testing", () => {
  for (const data of records) {
    test(`Login Test for ${data.email} and ${data.password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");
      await page.locator("#Email").fill(data.email);
      await page.locator("#Password").fill(data.password);
      await page.locator("input[type='submit']").last().click();

      if (data.validity.toLowerCase() === "valid") {
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
