import { test, expect } from '../fixtures/pages.fixture';




test('Verify User can add items to the cart', async ({ page, homePage, productsPage, loginPage, viewCartPage, createdUser }) => {
  await homePage.navigate();
  await homePage.clickMenuOption(' Signup / Login');
  await loginPage.login(createdUser.email, createdUser.password);
  await homePage.clickMenuOption(' Products');
  await productsPage.addItemToCart({ name: 'Blue Top' });
  await productsPage.clickContinueShopping();
  await productsPage.addItemToCart({ name: 'Men Tshirt' });
  await productsPage.clickContinueShopping();
  await productsPage.addItemToCart({ name: 'Men Tshirt' });
  await productsPage.clickViewCart();
  const item1 = await viewCartPage.getItem('Blue Top');
  await expect(item1.price).toContain('Rs. 500');
  await expect(item1.quantity).toBe('1');
  await expect(item1.total).toContain('Rs. 500');
  const item2 = await viewCartPage.getItem('Men Tshirt');
  await expect(item2.price).toContain('Rs. 400');
  await expect(item2.quantity).toBe('2');
  await expect(item2.total).toContain('Rs. 800');

});
