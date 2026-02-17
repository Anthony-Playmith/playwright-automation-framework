import { test as base } from './user.fixture';
import { HomePage } from '../pages/home.page';
import { SignupPage } from '../pages/signup.page';
import { AccountPage } from '../pages/account.page';
import { LoginPage } from '../pages/login.page';
import { ViewCartPage } from '../pages/viewcart.page';
import { ProductsPage } from '../pages/products.page';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';
import { PaymentDonePage } from '../pages/paymentdone.page';


type PagesFixture = {
  homePage: HomePage;
  signupPage: SignupPage;
  accountPage: AccountPage;
  loginPage: LoginPage;
  viewCartPage: ViewCartPage;
  productsPage: ProductsPage;
  checkoutPage: CheckoutPage;
  paymentdonePage: PaymentDonePage;
  paymentPage: PaymentPage;
};

export const test = base.extend<PagesFixture>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

   loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },

  viewCartPage: async ({ page }, use) => {
    await use(new ViewCartPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
  paymentdonePage: async ({ page }, use) => {
    await use(new PaymentDonePage(page));
  },
});

export { expect } from '@playwright/test';