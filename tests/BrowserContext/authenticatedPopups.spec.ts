import{test,expect} from '@playwright/test';

test("Handle Authenticated Popups",async({browser})=>{
    const context=await browser.newContext({httpCredentials:{username:"admin",password:"admin"}});
    const page= await context.newPage();

   /*  //Syntax:
    //Approach 1: Directly pass login along with url
    //https://the-internet.herokuapp.com/basic_auth
    //http://username:password@the-internet.herokuapp.com/basic_auth

    await page.goto("http://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();  //wait till page load completely

    await expect(page.getByText('Congratulations! You must have the proper credentials.', { exact: true })).toBeVisible();
    */

    //Approach2: Pass the login along with browser context (Preffered)
    //Here need to give credentials inside context like "await browser.newContext({httpCredentials:{username:"admin",password:"admin"}});"

     await page.goto("http://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();  //wait till page load completely

    await expect(page.getByText('Congratulations! You must have the proper credentials.', { exact: true })).toBeVisible();


});