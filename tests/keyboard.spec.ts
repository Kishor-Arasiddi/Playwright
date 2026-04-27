import{test,expect} from '@playwright/test';

test("Verify Keyboard Actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const input1=page.locator('#input1');

    //Focus on the field
    await input1.focus();
    //Insert text into the field
    await page.keyboard.insertText("Welcome");

    //Here 'down' acts press and 'up' acts as release
    //Select the text
    //await page.keyboard.down("Control");  so in mac instead of control used Meta
    await page.keyboard.down("Meta");
    await page.keyboard.press("A");
    await page.keyboard.up("Meta");

    //Copy the text
    await page.keyboard.down("Meta");
    await page.keyboard.press("C");
    await page.keyboard.up("Meta");

    //Press tab 2 times
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    //Paste the text
    await page.keyboard.down("Meta");
    await page.keyboard.press("V");
    await page.keyboard.up("Meta");

    //Press tab 2 times
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    //Paste the text
    await page.keyboard.down("Meta");
    await page.keyboard.press("V");
    await page.keyboard.up("Meta");

   await page.waitForTimeout(3000);
});

test("Keyboard Actions: Simple Way",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const input1=page.locator('#input1');

    //Focus on the field
    await input1.focus();
    //Insert text into the field
    await page.keyboard.insertText("Welcome");

    await page.keyboard.press("Meta+A");
    await page.keyboard.press("Meta+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Meta+V");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Meta+V");

   await page.waitForTimeout(3000);

})