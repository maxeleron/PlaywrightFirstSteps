const { test, expect } = require('@playwright/test');

// Assertion for element color
test('Buy buttons have correct color', async ({ page }) => {
    // Go to page of phone "Samsung Galaxy M32"
    await page.goto('https://rozetka.com.ua/samsung-sm-m325fzkgsek/p306669293/');
    const buyButton = page.locator('.product__buy .buy-button');
    const buyCreditButton = page.locator('.product__credit .button--large');

    // Assertion to check buttons color is correct
    await expect(buyButton).toHaveCSS('background-color', 'rgb(0, 160, 70)');
    await expect(buyCreditButton).toHaveCSS('background-color', 'rgb(62, 119, 170)');
  });