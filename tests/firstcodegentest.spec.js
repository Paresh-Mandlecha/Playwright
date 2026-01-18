import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
 
  await page.locator('#loginusername').fill('Proper');

  await page.locator('#loginpassword').fill('Proper@51');
  
  await page.getByRole('button', { name: 'Log in' }).click();
});