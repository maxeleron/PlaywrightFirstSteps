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
    await page.click('[title="Мониторы"]');

    // Sort only
    // Sort by brand (Dell)
    await page.waitForSelector('[for="Dell"]');
    await page.click('[for="Dell"]');

    // Select "P" series
    await page.waitForSelector('[for="P"]');
    await page.click('[for="P"]');

    // Select 24" - 24.9" diagonal
    await page.waitForSelector(`[for='24" - 24.9"']`);
    await page.click(`[for='24" - 24.9"']`);

    // Wait for sort applied
    await page.waitForSelector('.goods-tile__heading');

    // Assertion to check that sorting applied correctly
    const title = await page.locator('.goods-tile__heading').textContent();
    await expect(title.trim()).toStrictEqual('Монитор 24.1" Dell P2421 Black (210-AWLE)');
  });