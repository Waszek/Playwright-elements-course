import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    page.on('response', (data) => {
      if (data.status() === 500) {
        console.error(`Error response: ${data.status()} for ${data.url()}`);
      }
    });

    await use(page);
  },
});
