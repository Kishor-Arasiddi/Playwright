import{test,expect,chromium} from '@playwright/test';

test("Handle Tabs",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const parentpage= await context.newPage();

    await parentpage.goto("https://testautomationpractice.blogspot.com/");

   // context.waitForEvent('page'); // A promise can be pending, fulfilled, rejected
    // parentpage.locator(`button:has-text("New Tab")`).click();

    //The above statement can't be acheieved because we need to execute the both statement parallaly
    const [childPage]=await Promise.all([context.waitForEvent('page'),parentpage.locator(`button:has-text("New Tab")`).click()]);

    //Approach 1: To get the title of the pages
    //Use this approach when there are multiple pages/tabs
    const pages=context.pages();
    console.log("Number of pages: ", pages.length);

     console.log("Title Of ParentPage: ",await pages[0].title());
     console.log("Title of the ChildPage: ",await pages[1].title());

     //Approach 2: To get the title of pages
     //Use this page when there are only 2 pages
     console.log("Title of ParentPage: ", await parentpage.title());
     console.log("Title of ChildPage: ", await childPage.title());
});