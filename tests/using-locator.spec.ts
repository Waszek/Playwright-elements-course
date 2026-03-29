import { test, expect } from '@playwright/test';

test.describe('Finding different elements usisng raw locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/simple-elements.html');
  });
  test('Find label element by ID (CSS)', async ({ page }) => {
    const elementSelector = '#id-label-element';
    const elementLocator = page.locator(elementSelector);
    const expectText = 'Some text for label';

    await expect(elementLocator).toHaveText(expectText);
  });

  test('Find label element by ID (XPath)', async ({ page }) => {
    const elementSelector = '//*[@id="id-label-element"]';
    const elementLocator = page.locator(elementSelector);
    const expectText = 'Some text for label';

    await expect(elementLocator).toHaveText(expectText);
  });
});
