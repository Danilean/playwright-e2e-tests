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
    // Navega até a URL base configurada no playwright.config.ts
    await this.page.goto('/');
    // Espera explícita para garantir que todos os recursos da página sejam carregados
    await this.page.waitForLoadState('load');
  }

  async validateHomePageLoaded() {
    // Valida se a barra de pesquisa está presente como indicação de que a página inicial foi carregada
    await this.searchBar.waitForSearchBarToBeVisible();
  }
}
