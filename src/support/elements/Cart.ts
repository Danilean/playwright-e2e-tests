import { Page, Locator } from '@playwright/test';

export default class Cart {
  private readonly page: Page;
  private readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Seleciona o botão do carrinho com o seletor apropriado
    this.cartButton = page.locator('button[data-bs-toggle="dropdown"]');
  }

  async openCart() {
    // Espera que o botão do carrinho esteja visível e clica nele
    await this.cartButton.waitFor({ state: 'visible' });
    await this.cartButton.click();
    console.log('Clique no botão do carrinho realizado.');
  }
}
