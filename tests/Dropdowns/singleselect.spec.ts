import{test,Locator,expect} from "@playwright/test"
import { log } from "console"

test("Single Select Dropdown",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com")

   //1) Select option from the dropdwon (4 ways)
//    await page.locator("#country").selectOption('India')    //Using Visisble text
//    await page.locator("#country").selectOption({value:'france'})  //Using Value attribute
// await page.locator("#country").selectOption({label:'Canada'})  //Using Label
// await page.locator("#country").selectOption({index:3})  //Using Index

   await page.waitForTimeout(5000)

   //2) Check number of options in the dropdown
   const dropdownOption:Locator=page.locator("#country>option")
   console.log(await dropdownOption.count());
   await expect(dropdownOption).toHaveCount(10)

   //3) Check an option is presen in the dropdown
  const optionText= (await dropdownOption.allTextContents()).map(text=>text.trim());
  console.log(optionText);
  expect(optionText).toContain('India') //check if the array contain 'India'

  //4 Printing the options
  for(let option of optionText){
   console.log(option);
  }
})