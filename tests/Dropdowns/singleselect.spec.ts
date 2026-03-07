import{test,Locator,expect} from "@playwright/test"

test("Single Select Dropdown",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com")

   //1) Select option from the dropdwon (4 ways)
//    await page.locator("#country").selectOption('India')    //Using Visisble text
//    await page.locator("#country").selectOption({value:'france'})  //Using Value attribute
// await page.locator("#country").selectOption({label:'Canada'})  //Using Label
await page.locator("#country").selectOption({index:3})  //Using Index

   await page.waitForTimeout(5000)
})