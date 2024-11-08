import { test } from '@playwright/test';
import Cart from '../support/elements/Cart';

test.describe('View Cart', () => {
  test('Should open the cart view', async ({ page }) => {
    const cart = new Cart(page);

    await page.goto('https://demo.opencart.com/');
    console.log('Página inicial carregada.');

    await cart.openCart();
    console.log('Carrinho aberto.');
  });
});
