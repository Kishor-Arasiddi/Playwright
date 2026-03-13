//Pre-requisite
//Install the xlsx module to read the xlsx files
//npm install xlsx

import { test, expect } from "@playwright/test";
import fs from 'fs';
import * as XLSX from 'xlsx'

//Loaded excel file
//file-->workbook-->sheets-->rows&columns

const xlsxPath="tests/testData/data1.xlsx"
const workbook=XLSX.readFile(xlsxPath);
const sheetNames=workbook.SheetNames[0];
const workSheet=workbook.Sheets[sheetNames]

//Convert sheet into json 
//Here converting xlsx to json becuase json is inbuilt supportive for javascript/typescript
const loginData:any = XLSX.utils.sheet_to_json(workSheet);
console.log(loginData);

test.describe("Login data driven testing", async() => {
  for (const { email, password, validity } of loginData) {
    test(`Login Test for ${email} and ${password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator("input[type='submit']").last().click();

      if (validity === "valid") {
        const logOut = page.locator("a[href='/logout']");
        await expect(logOut).toBeVisible({ timeout: 5000 });
      } else {
        const errorMessage = page.locator(".validation-summary-errors");
        await expect(errorMessage).toBeVisible({timeout:7000});
        await expect.soft(errorMessage).toContainText("Login was unsuccessful");
      }
    });
  }
});