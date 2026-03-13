import{test,expect} from '@playwright/test'

test("Comaparing the snapshots of the page",async({page})=>{
   await page.goto("https://www.amazon.in")

   // Approach 1
   expect(await page.screenshot()).toMatchSnapshot("homepage.png")

   //Approach 2
//    expect(page).toHaveScreenshot();
})

test("Comaparing the snapshots of particuler element",async({page})=>{
   await page.goto("https://www.amazon.in")
   const logo=page.locator("a[aria-label='Amazon.in']");
   expect(await logo.screenshot()).toMatchSnapshot("logo.png");
   await page.waitForTimeout(3000);
})
   