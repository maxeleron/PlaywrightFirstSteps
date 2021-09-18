const { test, expect } = require('@playwright/test');

// fourth test
// 
test('fourth test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });