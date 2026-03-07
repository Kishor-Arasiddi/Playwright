import{test,Locator,expect} from "@playwright/test";

//Radio Buttons
test("radio button Actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let button=page.locator("#male")
    await expect(button).toBeVisible()
    await expect(button).toBeEnabled()
    expect(await button.isChecked()).toBe(false)

    //Here check() is method used for checking radio buttons and uncheck() method for unchecking
    await button.check();
    //This we will check when we want expected
    expect(await button.isChecked()).toBe(true);
    //This is default assertion method (Preferable)
    expect(button).toBeChecked()
    await page.waitForTimeout(300)
})