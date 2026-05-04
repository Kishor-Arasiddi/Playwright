import{test,expect} from '@playwright/test';

test("Handle Popups",async({browser})=>{
    const context=await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");

    //await page.waitForEvent('popup');
    //page.getByRole('button', { name: 'Popup Windows' });

   await Promise.all([page.waitForEvent('popup'),page.getByRole('button', { name: 'Popup Windows' }).click()]);
   await page.waitForTimeout(1000);
   const allPopups=context.pages(); //returns array of pages
   console.log("Number of pages/windows: ",allPopups.length);

   console.log("Title of first popup window: ",await allPopups[0].title());
   console.log("Title of second popup window: ",await allPopups[1].title());
   console.log("Title of third popup window: ",await allPopups[2].title());

   for(const pw of allPopups){
    const url=pw.url();
    if(url.includes('playwright')){
        await pw.locator(".getStarted_Sjon").click();
        await pw.waitForTimeout(3000);
        await pw.close();
    }
   }
   await page.waitForTimeout(3000);
});