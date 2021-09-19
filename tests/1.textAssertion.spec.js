const { test, expect } = require('@playwright/test');

// Assertion for text
test('Catalogue button has correct text', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');

    // Getting text content from Catalogue batton to title variable
    const title = await page.locator('#fat-menu').textContent();

    // Assertion to check text
    await expect(title.trim()).toStrictEqual('Каталог');
  });
