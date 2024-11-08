import { Page, Locator } from '@playwright/test';

export default class Cart {
  private readonly page: Page;
  private readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator('button[data-bs-toggle="dropdown"]');
  }

  async openCart() {
    await this.cartButton.waitFor({ state: 'visible' });
    await this.cartButton.click();
    console.log('Clique no botão do carrinho realizado.');
  }
}
