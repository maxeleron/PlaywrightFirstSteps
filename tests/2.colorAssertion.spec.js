const { test, expect } = require('@playwright/test');

// second test
// Assertion for element color
test('second test', async ({ page }) => {
    // Go to page of phone "Samsung Galaxy M32"
    await page.goto('https://rozetka.com.ua/samsung-sm-m325fzkgsek/p306669293/');
    const buyButton = page.locator('.product__buy .buy-button');
    const buyCreditButton = page.locator('.product__credit .button--large');
    // const buyButtonColor = buyButton.getAttribute('background-color')
    await expect(buyButton).toHaveCSS('background-color', 'rgb(0, 160, 70)');
    await expect(buyCreditButton).toHaveCSS('background-color', 'rgb(62, 119, 170)');
  });