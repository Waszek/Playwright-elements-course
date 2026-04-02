import { expect } from '@playwright/test';
import { test } from '../fixtures/fixture.ts';

test.describe('Event listeners', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/restaurant-order.html');
  });
  test('simple order submission', async ({ page }) => {
    //Arrange
    const userId = `User_${Math.floor(Math.random() * 1000)}`;
    const itemName = 'Tuna Roll';
    const customerNameInput = page.getByTestId('customer-name-input');
    const itemNameSelect = page.getByTestId('item-name-input-1');
    const sumbitOrderBtn = page.getByTestId('submit-order-btn');
    const orderCardId = 'order-card-1';
    const orderCardElement = page
      .getByTestId(orderCardId)
      .locator('.order-items-compact');
    const expectMessage = '• Tuna Roll × 1 - $5.00';
    //Act
    await customerNameInput.fill(userId);
    await itemNameSelect.selectOption(itemName);
    await sumbitOrderBtn.click();
    //Assert
    await expect(orderCardElement).toHaveText(expectMessage);
  });
});
