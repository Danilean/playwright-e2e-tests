import { test, expect } from '@playwright/test';
import HomePage from '../support/pages/HomePage';

test.describe('Search Product', () => {
  test('Should find a product by name', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.validateHomePageLoaded();
    console.log('Página inicial carregada e validada.');

    const productName = 'MacBook';
    await homePage.searchBar.searchProduct(productName);

    const firstProduct = page.locator('.product-layout .caption h4 a').first();
    await firstProduct.waitFor({ state: 'visible' });
    await expect(firstProduct).toHaveText(productName);
  });
});
