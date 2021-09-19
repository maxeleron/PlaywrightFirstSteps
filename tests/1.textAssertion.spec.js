const { test, expect } = require('@playwright/test');

// Assertion for text
test('Catalogue button has correct text', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');

    const title = await page.locator('#fat-menu').textContent();
    await expect(title.trim()).toStrictEqual('Каталог');
  });
