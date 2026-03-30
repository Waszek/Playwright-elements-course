import { test, expect, selectors } from '@playwright/test';

test.describe('Finding checkbox with different locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/simple-elements.html');
  });

  test('Finding checkbox with ID locator', async ({ page }) => {
    const checkboxElement = page.locator('#id-checkbox');
    const expectMessage = 'Checkbox is checked!';

    checkboxElement.click();
    const resultTable = page.locator('#results');

    await expect(resultTable).toHaveText(expectMessage);
  });

  test('Finding checkbox with class locator', async ({ page }) => {
    const checkboxElement = page.locator('.my-checkbox');
    const expectMessage = 'Checkbox is checked!';

    const resultTable = page.locator('#results');
    checkboxElement.click();

    await expect(resultTable).toHaveText(expectMessage);
  });

  test('Finding checkbox with role locator', async ({ page }) => {
    const checkboxElement = page.getByRole('checkbox');
    const expectMessage = 'Checkbox is checked!';

    const resultTable = page.locator('#results');
    checkboxElement.click();

    await expect(resultTable).toHaveText(expectMessage);
  });

  test('Finding checkbox with data-testid locator', async ({ page }) => {
    const checkboxElement = page.getByTestId('dti-checkbox');
    const expectMessage = 'Checkbox is checked!';

    const resultTable = page.locator('#results');
    checkboxElement.click();

    await expect(resultTable).toHaveText(expectMessage);
  });

  test('Finding checkbox with atrribute locator', async ({ page }) => {
    const checkboxElement = page.locator('[ckbx="val1"]');
    const expectMessage = 'Checkbox is checked!';

    const resultTable = page.locator('#results');
    checkboxElement.click();

    await expect(resultTable).toHaveText(expectMessage);
  });
});
