import { test, expect } from '@playwright/test';

test.describe('Locator lists', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/simple-multiple-elements-no-ids.html');
  });

  test('All buttons on page', async ({ page }) => {
    //Arrange
    const buttonRole = 'button';
    const buttonElements = page.getByRole(buttonRole);
    const expectCount = 7;

    // console.log(await buttonElements.count());

    //Assert
    await expect(buttonElements).toHaveCount(expectCount);
  });

  test('action on nth button', async ({ page }) => {
    //Arrange
    const buttonRole = 'button';
    const resultsTableId = 'dti-results';
    const expectMessage = 'You clicked the button! (Second one!)';

    const buttonElements = page.getByRole(buttonRole);
    const resultsTableElement = page.getByTestId(resultsTableId);

    //Act
    await buttonElements.nth(2).click();

    //Assert
    await expect(resultsTableElement).toHaveText(expectMessage);
  });

  test('action on multiple buttons', async ({ page }) => {
    //Arrange
    const buttonRole = 'button';
    const buttonText = 'Click!';
    const resultsTableId = 'dti-results';

    const buttonElements = page.getByRole(buttonRole, { name: buttonText });
    const resultsTableElement = page.getByTestId(resultsTableId);

    // //Act
    // await buttonElements.nth(0).click();
    // console.log(await resultsTableElement.textContent());
    // await buttonElements.nth(1).click();
    // console.log(await resultsTableElement.textContent());
    // await buttonElements.nth(2).click();
    // console.log(await resultsTableElement.textContent());
    const numberOfElements = await buttonElements.count();
    for (let index = 0; index < numberOfElements; index++) {
      await buttonElements.nth(index).click();
      console.log(await resultsTableElement.textContent());
    }

    const allButtonLocators = await buttonElements.all();
    for (const button of allButtonLocators) {
      await button.click();
      console.log(await resultsTableElement.textContent());
    }

    //Assert
  });
});
