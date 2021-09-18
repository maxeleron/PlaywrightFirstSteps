const { test, expect } = require('@playwright/test');

test('User can perform a purchase', async ({ page }) => {
    // Go to main page
    await page.goto('https://rozetka.com.ua/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });