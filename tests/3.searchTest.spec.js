const { test, expect } = require('@playwright/test');
const { MainPage } = require('../models/MainPage');
const { GoodsPage } = require('../models/GoodsPage');
const { SearchPage } = require('../models/SearchPage');
const { TestStrings } = require('../testData/TestStrings');

test('User can perform global search', async ({ page }) => {
    // Page Object variables
    const mainPage = new MainPage(page);
    const goodsPage = new GoodsPage(page);
    const searchPage = new SearchPage(page);
    const testStrings = new TestStrings();

    // Open new page - rozetka.com.ua
    await mainPage.open();

    // Perform search
    await searchPage.search( testStrings.xiomi, goodsPage.goodsTileTitle );

    // Get all elements at search results page
    const goodsTiles = await page.locator( goodsPage.goodsTileTitle );

    // Get text from search results
    const allGoodsText = await goodsTiles.allInnerTexts();

    // Assertion to check all elements after searching containing searched text
    allGoodsText.map(async(item) => await expect(item.toLocaleLowerCase()).toContain(testStrings.xiomi));
  });
