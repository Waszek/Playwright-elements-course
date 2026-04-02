import { expect } from '@playwright/test';
import { test } from '../fixtures/fixture2.ts';

test.describe('Event listeners', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/restaurant-order.html');
  });
  test('simple order submission', async ({ page }) => {
    //Arrange
    const restaurantCard = page.locator('#popupContent');
    const expectText = '📊 Order Statistics';
    const orderCardId = 'order-card-1';
    const orderCardElement = page
      .getByTestId(orderCardId)
      .locator('.order-items-compact');
    //Act
    await orderCardElement.click();

    //Assert
    await expect(restaurantCard).toContainText(expectText);
  });
});
// await page.getByText('2.04.2026', { exact: true }).click();
