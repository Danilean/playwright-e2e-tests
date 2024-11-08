import { Page, Locator } from '@playwright/test';

export default class SearchBar {
  private readonly page: Page;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('button[class="btn btn-default btn-lg"]');
  }

  async searchProduct(productName: string) {
    console.log(`Pesquisando por: ${productName}`);

    await this.searchInput.click();
    await this.searchInput.fill(productName);

    await this.searchInput.press('Enter');
    console.log('Enter pressionado para enviar a busca.');

  }

  async waitForSearchBarToBeVisible() {
    await this.searchInput.waitFor({ state: 'visible' });
  }
}