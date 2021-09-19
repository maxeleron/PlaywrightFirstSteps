const { test, expect } = require('@playwright/test');
const { MainPage } = require('../models/MainPage');
const { GoodsPage } = require('../models/GoodsPage');
const { TestSort } = require('../testData/TestSort');
const { TestStrings } = require('../testData/TestStrings');

test('User can sort elements', async ({ page }) => {
    // Page Object variables
    const mainPage = new MainPage(page);
    const goodsPage = new GoodsPage(page);
    const testSort = new TestSort();
    const testStrings = new TestStrings();

    // Open new page - rozetka.com.ua
    await mainPage.open();

    // Open Catalogue ("Каталог")
    await page.click( mainPage.catalogueButton );

    // The user clicks 'Ноутбуки и компьютеры' section
    await page.click('text=Ноутбуки и компьютеры');

    // Select Laptop category
    await page.click('[title="Ноутбуки"]');

    // Sort by brand Lenovo
    await goodsPage.sortGoods( testSort.lenovo );

    // Sort by CPU: AMD Ryzen 5
    await goodsPage.sortGoods( testSort.amdRyzen5 );

    // Sort by RAM: 16-24gb
    await goodsPage.sortGoods( testSort.ram16_24gb );

    // Sort by SSD: 256gb
    await goodsPage.sortGoods( testSort.ssd256gb );

    // Select only avaliable laptops
    await goodsPage.sortGoods( testSort.avaliable );

    // Select 16"-17" diagonal
    await goodsPage.sortGoods( testSort.display16_17 );

    // Wait for sort applied
    await page.waitForSelector( goodsPage.goodsTileTitle );

    // Assertion to check that sorting applied correctly
    const title = await page.locator( goodsPage.goodsTileTitle ).textContent();
    await expect(title.trim()).toStrictEqual( testStrings.HP_17_cp0007ua );
  });