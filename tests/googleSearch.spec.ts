import { test, expect } from '@playwright/test';
import { GoogleSearchPage } from '../pages/GoogleSearchPage';

const searchWord:string = "Playwright";

test('Search ${searchWord} in google', async ({ page }) => {
  const googleSearch = new GoogleSearchPage(page);
  await googleSearch.goto();
  await googleSearch.searchFor(searchWord);
  await expect(googleSearch.pageContent).toContainText('Playwright\: Fast and reliable end-to-end testing');
  await expect(googleSearch.pageContent).toContainText('microsoft\/playwright');
});

/*
test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});
*/