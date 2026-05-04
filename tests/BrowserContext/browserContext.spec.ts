import { test, expect, chromium } from '@playwright/test';

//Browser -> Context -> Page

//Browser-> chromium, firefox, webkit

//Context-> We can have multiple contexts for multiple users/apps for the same browser
           // provide a way to operate multiple independent browser sessions.

//Page-> New Tab, Window, Popup

test('Browser Context Test', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext(); // create a new context

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    console.log('Number of pages: ', context.pages().length);
    expect(context.pages()).toHaveLength(2);

    await page1.goto('https://www.google.com');
    expect(page1).toHaveTitle('Google');

    await page2.goto('https://playwright.dev/');
    await expect(page2).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);

    await browser.close();

});
