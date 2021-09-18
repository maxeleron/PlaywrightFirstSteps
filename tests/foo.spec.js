const { test, expect } = require('@playwright/test');

// test('basic test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
// });

// first test
// Assertion for text
test('first test', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');
    const title = await page.locator('#fat-menu').textContent();
    await expect(title.trim()).toStrictEqual('Каталог');
  });

// // third test
// // 
// test('third test', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     const title = page.locator('.navbar__inner .navbar__title');
//     await expect(title).toHaveText('Playwright');
//   });

// // fourth test
// // 
// test('fourth test', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     const title = page.locator('.navbar__inner .navbar__title');
//     await expect(title).toHaveText('Playwright');
//   });

// // fifth test
// // 
// test('fifth test', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     const title = page.locator('.navbar__inner .navbar__title');
//     await expect(title).toHaveText('Playwright');
//   });