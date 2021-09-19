const { test, expect } = require('@playwright/test');

test('User can sort elements', async ({ page }) => {
    // Go to main page
    await page.goto('https://rozetka.com.ua/');

    // Open Catalogue ("Каталог")
    await page.click('#fat-menu');

    // The user clicks 'Ноутбуки и компьютеры' section
    // await page.waitForSelector('text=Ноутбуки и компьютеры');
    await page.click('text=Ноутбуки и компьютеры');

    // 
    await page.click('[title="Ноутбуки"]');

    // Sort only
    // Sort by brand (Dell)
    await page.waitForSelector('[for="Apple"]');
    await page.click('[for="Apple"]');

    // Sort by brand (Dell)
    await page.waitForSelector('[for="MacBook Pro 2020"]');
    await page.click('[for="MacBook Pro 2020"]');

    // await page.waitForTimeout(1000);
    // Select "P" series
    await page.waitForSelector('[for="Есть в наличии"]');
    await page.click('[for="Есть в наличии"]');

    // Select 24" - 24.9" diagonal
    // await page.waitForSelector(`[for='24" - 24.9"']`);
    // await page.click(`[for='24" - 24.9"']`);

    // Wait for sort applied
    await page.waitForSelector('.goods-tile__heading');

    // Assertion to check that sorting applied correctly
    const title = await page.locator('.goods-tile__heading').textContent();
    await expect(title.trim()).toStrictEqual('Б/у Tower / Athlon II X2 240 (2 ядра по 2.8 GHz) / 4 GB DDR3 / 320 GB HDD / 400W');
  });