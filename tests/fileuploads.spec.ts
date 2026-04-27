import {test,expect} from '@playwright/test';

test("Verify the single file upload functionality",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator('#singleFileInput').setInputFiles("tests/Uploads/ABG_Group_HR_Leadership.txt");
   await page.getByRole('button', { name: 'Upload Single File' }).click();

   const msg=await page.locator('#singleFileStatus').textContent();
   expect(msg).toContain("ABG_Group_HR_Leadership.txt");
   console.log("File Uploaded...");
   console.log(msg);
   await page.waitForTimeout(3000);
});

test.only("Verify the Multiple file upload functionality",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator('#multipleFilesInput').click();
   await page.locator('#multipleFilesInput').setInputFiles(["tests/Uploads/ABG_Group_HR_Leadership.txt","tests/Uploads/ITC_INFOTECH.pdf"]);
   await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

   const msg=await page.locator('#multipleFilesStatus').textContent();
   expect(msg).toContain('ABG_Group_HR_Leadership.txt');
   expect(msg).toContain('ITC_INFOTECH.pdf');
   console.log("File Uploaded...");
   console.log(msg);
   await page.waitForTimeout(3000);
});

