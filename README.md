# PlaywrightFirstSteps
This project is created as an assessment aim (to claim AQA J3)

## Installation of the project
### 1) install of Playwright
__npm i -D @playwright/test__
### 2) install supported browsers
__npx playwright install__

# Different runs (you can also find them in package.json scripts)
Write "npm run ..." and one of the commands below to run full regression or single test.

    "REGRESSION": "playwright test",
    "textAssertion": "playwright test 1.textAssertion.spec.js",
    "colorAssertion": "playwright test 2.colorAssertion.spec.js",
    "searchTest": "playwright test 3.searchTest.spec.js",
    "sortTest": "playwright test 4.sortTest.spec.js",
    "shopPathTest": "playwright test 5.shopPathTest.spec.js"
