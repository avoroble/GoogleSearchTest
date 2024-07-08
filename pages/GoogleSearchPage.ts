import { expect, type Locator, type Page } from '@playwright/test';

export class GoogleSearchPage {

  readonly page: Page;
  readonly fieldSearch: Locator;
  readonly buttonGoogleSearch: Locator;
  readonly buttonFeelingLucky;
  readonly linkAbout: Locator;
  readonly linkStore: Locator;
  readonly linkSignIn: Locator;
  readonly linkGmail: Locator;
  readonly linkImages: Locator;
  readonly pageContent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fieldSearch = page.getByLabel('Search', { exact: true });
    this.buttonGoogleSearch = page.getByRole('button', { name: 'Google Search' });
    this.buttonFeelingLucky = page.getByRole('button', { name: 'I\'m Feeling Lucky' })
    this.linkAbout = page.getByRole('link', { name: 'About' });
    this.linkStore = page.getByRole('link', { name: 'Store' });
    this.linkSignIn = page.getByLabel('Sign in');
    this.linkGmail = page.getByLabel('Gmail');
    this.linkImages = page.getByLabel('Search for Images');
    this.pageContent = page.locator('#center_col');
  }

  async goto() {
    await this.page.goto('https://www.google.com/?hl=en');
    if (await this.page.getByRole('button', { name: 'Reject all' }).isVisible())
        this.page.getByRole('button', { name: 'Reject all' }).click()
  }

  async searchFor(text) {
    await this.fieldSearch.fill(text);
    await this.page.keyboard.press('Enter');
    await this.page.locator('#bres').getByText('People also search for').isVisible();

  }

  async gotoAbout() {
    await this.linkAbout.click();
  }

  async gotoStore() {
    await this.linkStore.click();
  }
  
  async gotoGmail() {
    await this.linkGmail.click();
  }




}