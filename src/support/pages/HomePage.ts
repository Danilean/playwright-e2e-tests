import { Page } from '@playwright/test';
import SearchBar from '../elements/SearchBar';

export default class HomePage {
  readonly page: Page;
  readonly searchBar: SearchBar;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = new SearchBar(page);
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async validateHomePageLoaded() {
    await this.searchBar.waitForSearchBarToBeVisible();
  }
}
