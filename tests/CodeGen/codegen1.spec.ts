import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByLabel('Login').click();
  await page.locator('.OqYNhN.Kpu3_t > .izSqBy > .NN45sZ').click();
  await page.getByText('Electronics').click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await expect(page.getByRole('link', { name: 'Flipkart' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Search for products, brands' })).toBeEmpty();
});