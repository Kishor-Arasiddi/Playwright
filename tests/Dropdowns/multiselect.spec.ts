import{test,Locator,expect} from '@playwright/test'

test("MultiSelect Dropdowns",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //1) Select option from the dropdwon (4 ways)
    // await page.locator("#colors").selectOption(['Red','Blue','Yellow']) //By visible text
    // await page.locator("#colors").selectOption(['red','yellow','green']) //By value attribute
    // await page.locator("#colors").selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]) //Using label
    // await page.locator("#colors").selectOption([{index:0},{index:3},{index:6}]) //Using index

    //2) Check number of options in the dropdown
   const dropdownOption:Locator=page.locator("#colors>option")
   console.log(await dropdownOption.count());
   await expect(dropdownOption).toHaveCount(7)

   //3) Check an option is presen in the dropdown
  const optionText= (await dropdownOption.allTextContents()).map(text=>text.trim());
  console.log(optionText);
  expect(optionText).toContain('White') //check if the array contain 'White'

  //4 Printing the options
  for(let option of optionText){
   console.log(option);
  }
    await page.waitForTimeout(3000)
})