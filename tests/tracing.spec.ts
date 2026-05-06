import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/');
  await page.getByRole('link', { name: ' My Account' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('naruto@sharklasers.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Naruto@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "My Account" [level=2]`);
  await page.getByRole('link', { name: ' My Account' }).click();
  await page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();
});

//To get the trace zip file for specific test, run below command
//npx playwright test tests/tracing.spec.ts --headed --trace on


//Here from the test also we can add trace configurations
//Using context only we can add configurations for the tracing, without context not possible
//Limitation of this approach is, "in HTML report we can't see the trace report"

//To open generated trace zip file need to run below command, we can't unzip directly
//1) npx playwright show-trace trace.zip
//2) Using playwright utility --> https://trace.playwright.dev/ (Here simply add the trace.zip file)

test('test trace', async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.goto('https://tutorialsninja.com/demo/');
  await page.getByRole('link', { name: ' My Account' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('naruto@sharklasers.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Naruto@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "My Account" [level=2]`);
  await page.getByRole('link', { name: ' My Account' }).click();
  await page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();

  await context.tracing.stop({ path: 'trace.zip' });
});
