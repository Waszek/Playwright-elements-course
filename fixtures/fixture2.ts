import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    const errors: string[] = [];
    page.on('console', (data) => {
      if (data.type() === 'error') {
        console.error(`Error message: ${data.text()}`);
      }
    });

    await use(page);
  },
});
