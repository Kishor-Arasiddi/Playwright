import{test,expect} from '@playwright/test'

//Assertions
//There are 2 types of assertions
//1: Auto-retrying --> Automatically retries untill it passes or time out
//2: Non-retrying  --> Executes immediatly no retry


test("Verify Hard Assertions",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")

    //Hard Assertions
    await expect(page).toHaveTitle("Demo Web Shop");
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/")

    //Soft Assertions
   let text=page.getByText("Welcome to our store");
   await expect.soft(text).toBeVisible();
})