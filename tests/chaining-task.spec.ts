import { test, expect } from '@playwright/test';
test.describe('Reservation tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/simple-reservation-v1.html');
  });
  test('Click checkbox, reserve and checkout', async ({ page }) => {
    //Arrange
    const resultId = 'dti-results';
    const rowRole = 'row';
    const checkboxParentText = 'Food';
    const buttonParentText = '23.10.2024';
    const checkboxRole = 'checkbox';
    const buttonRole = 'button';
    const checkoutText = 'Checkout';
    const resultLocator = page.getByTestId(resultId);
    const resultMessage =
      'Reservation for 23.10.2024 with features: Food for total price: 150$';
    const checkboxElement = page
      .getByRole(rowRole)
      .filter({ hasText: checkboxParentText })
      .getByRole(checkboxRole);

    const actionButtonElement = page
      .getByRole(rowRole)
      .filter({ hasText: buttonParentText })
      .getByRole(buttonRole);

    const checkoutButtonElement = page.getByRole(buttonRole, {
      name: checkoutText,
    });
    //Act
    await checkboxElement.check();
    await actionButtonElement.click();
    await checkoutButtonElement.click();

    //Assert
    await expect(resultLocator).toHaveText(resultMessage);
  });
});
