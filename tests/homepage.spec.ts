import { test, expect } from '../fixtures/pages.fixture';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';


test('TC #1 - Verify user can add items to the cart', async ({ homePage, productsPage, loginPage, viewCartPage, createdUser }) => {
  await homePage.navigate();
  await homePage.clickMenuOption('Signup / Login');
  await loginPage.login(createdUser.email, createdUser.password);
  await homePage.clickMenuOption('Products');
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

test('TC #2 - Verify user can delete items from the cart', async ({ homePage, productsPage, loginPage, viewCartPage, createdUser }) => {
  await homePage.navigate();
  await homePage.clickMenuOption('Signup / Login');
  await loginPage.login(createdUser.email, createdUser.password);
  await homePage.clickMenuOption('Products');
  await productsPage.addItemToCart({ name: 'Stylish Dress' });
  await productsPage.clickContinueShopping();
  await productsPage.addItemToCart({ name: 'Winter Top' });
  await productsPage.clickContinueShopping();
  await productsPage.addItemToCart({ name: 'Summer White Top' });
  await productsPage.clickViewCart();
  await viewCartPage.clickDeleteByItemName("Stylish Dress");
  await viewCartPage.clickDeleteByItemName("Summer White Top");
  await expect(viewCartPage.getItemRow("Stylish Dress")).not.toBeVisible();
  await expect(viewCartPage.getItemRow("Summer White Top")).not.toBeVisible();
  await expect(viewCartPage.getItemRow("Winter Top")).toBeVisible();
});

test('TC #3 - Verify user can finalize a purchase', async ({ homePage, productsPage, loginPage, viewCartPage, checkoutPage, paymentdonePage, paymentPage, createdUser }) => {
  await homePage.navigate();
  await homePage.clickMenuOption('Signup / Login');
  await loginPage.login(createdUser.email, createdUser.password);
  await homePage.clickMenuOption('Products');
  await productsPage.addItemToCart({ name: 'Madame Top For Women' });
  await productsPage.clickContinueShopping();
  await productsPage.addItemToCart({ name: 'Fancy Green Top' });
  await productsPage.clickViewCart();
  await viewCartPage.clickProceedToCheckout();
  await checkoutPage.clickPlaceOrder();
  await paymentPage.fillCardDetails("Anthony Playmith","123456789", "321", "10", "2030");
  await paymentPage.clickPayAndConfirm();
  await expect(paymentdonePage.orderPlacedMessage).toBeVisible();
});