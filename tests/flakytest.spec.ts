import { test, expect } from '@playwright/test';

//Flaky Test: 
// A flaky test is a test that sometimes passes and sometimes fails without any changes in the code.

test('flaky test', async ({ page }) => {
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

//Through terminal also we can give retries for specific test
// npx playwright test <filename.spec.ts> --retries=3