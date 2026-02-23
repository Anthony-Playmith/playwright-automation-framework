import { test, expect } from '../fixtures/pages.fixture';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';


test('TC #4 - Verify product search filter is working as expected', async ({ homePage, productsPage, loginPage, viewCartPage, createdUser }) => {
    await homePage.navigate();
    await homePage.clickMenuOption('Signup / Login');
    await loginPage.login(createdUser.email, createdUser.password);
    await homePage.clickMenuOption('Products');
    const product3 = productsPage.getProductCard('Rs. 500', 'Blue Top')
    await expect(product3).toBeVisible();
    await productsPage.searchForProduct('Women')
    const product1 = productsPage.getProductCard('Rs. 1000', 'Madame Top For Women')
    const product2 = productsPage.getProductCard('Rs. 1400', 'Lace Top For Women')
    await expect(product1).toBeVisible();
    await expect(product2).toBeVisible();
    await expect(product3).not.toBeVisible();
});


test('TC #5 - Verify subcategories are visible', async ({ homePage, productsPage, loginPage, viewCartPage, createdUser }) => {
    await homePage.navigate();
    await homePage.clickMenuOption('Signup / Login');
    await loginPage.login(createdUser.email, createdUser.password);
    await homePage.clickMenuOption('Products');
    await productsPage.expandCategory("WOMEN")
    const subCategory1 = productsPage.getSubCategory('WOMEN', 'DRESS');
    const subCategory2 = productsPage.getSubCategory('WOMEN', 'TOPS');
    const subCategory3 = productsPage.getSubCategory('WOMEN', 'SAREE');
    await expect(subCategory1).toBeVisible();
    await expect(subCategory2).toBeVisible();
    await expect(subCategory3).toBeVisible();
    await productsPage.expandCategory("MEN")
    const subCategory4 = productsPage.getSubCategory('MEN', 'TSHIRTS');
    const subCategory5 = productsPage.getSubCategory('MEN', 'JEANS');
    await expect(subCategory4).toBeVisible();
    await expect(subCategory5).toBeVisible();
    await productsPage.expandCategory("KIDS")
    const subCategory6 = productsPage.getSubCategory('KIDS', 'DRESS');
    const subCategory7 = productsPage.getSubCategory('KIDS', 'Tops & Shirts');
    await expect(subCategory6).toBeVisible();
    await expect(subCategory7).toBeVisible();
});

test('TC #6 - Verify subcategories are clickable', async ({ homePage, productsPage, loginPage, createdUser }) => {
    await homePage.navigate();
    await homePage.clickMenuOption('Signup / Login');
    await loginPage.login(createdUser.email, createdUser.password);
    await homePage.clickMenuOption('Products');
    await productsPage.expandCategory("WOMEN")
    const subCategory1 = productsPage.getSubCategory('WOMEN', 'SAREE');
    await subCategory1.click();
    const product1 = productsPage.getProductCard('Rs. 3000', 'Cotton Silk Hand Block Print Saree')
    const product2 = productsPage.getProductCard('Rs. 3500', 'Rust Red Linen Saree')
    await expect(product1).toBeVisible();
    await expect(product2).toBeVisible();
});


