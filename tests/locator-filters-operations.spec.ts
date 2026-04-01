import { test, expect } from '@playwright/test';
test.describe('Locator filters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/simple-multiple-elements-no-ids.html');
  });

  test('Simple click in button', async ({ page }) => {
    //Arrange
    const elementRole = 'button';
    const resultId = 'dti-results';
    const expectMessage = 'You clicked the button!';
    const elementText = 'Click me!';

    const elementLocator = page.getByRole(elementRole, { name: elementText });
    const resultTableLocator = page.getByTestId(resultId);

    //Act
    await elementLocator.click();

    //Assert
    await expect(resultTableLocator).toHaveText(expectMessage);
  });

  test('Click in button using filter method', async ({ page }) => {
    //Arrange
    const elementRole = 'button';
    const resultId = 'dti-results';
    const expectMessage = 'You clicked the button!';
    const elementText = 'Click me!';

    const elementLocator = page
      .getByRole(elementRole)
      .filter({ hasText: elementText });
    const resultTableLocator = page.getByTestId(resultId);

    //Act
    await elementLocator.click();

    //Assert
    await expect(resultTableLocator).toHaveText(expectMessage);
  });

  test('Click in button using chaining getBy', async ({ page }) => {
    //Arrange
    const elementRole = 'button';
    const resultId = 'dti-results';
    const parentRole = 'row';
    const parentText = 'Row 2';
    const expectMessage = 'You clicked the button! (row 2)';

    const elementLocator = page
      .getByRole(parentRole, { name: parentText })
      .getByRole(elementRole);
    const resultTableLocator = page.getByTestId(resultId);

    //Act
    await elementLocator.click();
    //Assert
    await expect(resultTableLocator).toHaveText(expectMessage);
  });

  test('Click in button using chaining getBy and filter', async ({ page }) => {
    //Arrange
    const elementRole = 'button';
    const resultId = 'dti-results';
    const parentRole = 'row';
    const parentText = 'Row 2';
    const expectMessage = 'You clicked the button! (row 2)';

    const elementLocator = page
      .getByRole(parentRole)
      .filter({ has: page.getByText(parentText) })
      .getByRole(elementRole);
    const resultTableLocator = page.getByTestId(resultId);

    //Act
    await elementLocator.click();
    //Assert
    await expect(resultTableLocator).toHaveText(expectMessage);
  });
});
