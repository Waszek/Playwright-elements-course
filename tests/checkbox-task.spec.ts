import { test, expect } from '@playwright/test';

test.describe('Operation on multiple checkboxes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/simple-multiple-elements-no-ids.html');
  });

  test('check multiple checkboxes', async ({ page }) => {
    const checkboxRole = 'checkbox';
    const resultId = 'dti-results';
    let numberOfcheckbox = 1;

    const checkboxElement = page.getByRole(checkboxRole);
    const resultTable = page.getByTestId(resultId);

    const allCheckboxElements = await checkboxElement.all();
    for (const checkbox of allCheckboxElements) {
      const expectMessage = `Checkbox is checked! (Opt ${numberOfcheckbox}!)`;

      await checkbox.click();
      console.log(await resultTable.textContent());
      await expect.soft(resultTable).toHaveText(expectMessage);
      numberOfcheckbox++;
    }
  });
});
