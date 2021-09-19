const { test, expect } = require('@playwright/test');
const { MainPage } = require('../models/MainPage');
const { SearchPage } = require('../models/SearchPage');
const { GoodsPage } = require('../models/GoodsPage');
const { ShoppingPage } = require('../models/ShoppingPage');
const { TestStrings } = require('../testData/TestStrings');

test('User can perform a purchase', async ({ page }) => {
    // Page Object variables
    const mainPage = new MainPage(page);
    const searchPage = new SearchPage(page);
    const goodsPage = new GoodsPage(page);
    const shoppingPage = new ShoppingPage(page);
    const testStrings = new TestStrings();

    // Open new page - rozetka.com.ua
    await mainPage.open();

    // Perform search
    await searchPage.search( testStrings.JBL_Tune500, goodsPage.goodsTileTitle );

    // Click first headphones from search results
    await page.click( goodsPage.goodsTileTitle );

    // Click Buy button
    await page.click( shoppingPage.buyButton );

    // Getting items to variables before assertion
    const shoppingCartLocator = page.locator( shoppingPage.shoppingCart );
    const purchaseButtonLocator = page.locator( shoppingPage.purchaseButton );

    // Assertion to check that sorting applied correctly
    await expect(shoppingCartLocator).toBeVisible();
    await expect(purchaseButtonLocator).toBeVisible();
  });
