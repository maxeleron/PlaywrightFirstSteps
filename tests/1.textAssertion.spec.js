const { test, expect } = require('@playwright/test');

// first test
// Assertion for text
test('first test', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');
    const title = await page.locator('#fat-menu').textContent();
    await expect(title.trim()).toStrictEqual('Каталог');
  });
