import { test, expect } from '@playwright/test';

test.describe('Finding elemnts by test ID', () => {
  test.use({ testIdAttribute: 'pw-test' });
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/simple-elements-custom-attribute.html');
  });

  test('Findig elements by custom test ID', async ({ page }) => {
    const dataTestId = 'simple-button';
    const resultsTestId = 'results';
    const button = page.getByTestId(dataTestId);
    const resultTable = page.getByTestId(resultsTestId);
    const expectMessage = 'You clicked the button!';

    await button.click();

    await expect(resultTable).toHaveText(expectMessage);
  });
});
