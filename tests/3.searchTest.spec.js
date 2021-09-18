const { test, expect } = require('@playwright/test');

// third test
// 
test('third test', async ({ page }) => {
    // Go to page of phone "Samsung Galaxy M32"
    await page.goto('https://rozetka.com.ua/');
    // Text input
    await page.fill('rz-header input', 'Xiomi');

    await page.click('rz-header form > button');

    await page.waitForSelector('.goods-tile');

    const goodsTiles = await page.$$('.goods-tile__title');

    // let firstElm = await page.locator(goodsTiles[0]);
    await expect(goodsTiles[0].textContent()).toStrictEqual('some');
    // await expect(firstElm.textContent()).toStrictEqual('some');

    // goodsTiles.map(async(item) => await expect(item).toHaveText('Xiomi'));
    // const se = page.locator('.product__buy .buy-button');
    // const buyCreditButton = page.locator('.product__credit .button--large');

    // await expect(buyButton).toHaveCSS('background-color', 'rgb(0, 160, 70)');
    // await expect(buyCreditButton).toHaveCSS('background-color', 'rgb(62, 119, 170)');
  });