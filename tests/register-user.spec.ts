import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SignupPage } from '../pages/signup.page';
import { AccountPage } from '../pages/account.page';

test('Register User', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const accountPage = new AccountPage(page);

  const username = 'JohnDoe';
  const email = `john${Date.now()}@testmail.com`;
  const password = 'Password123';

  // 1–3
  await homePage.navigate();
  await homePage.verifyHomePageVisible();

  // 4–5
  await homePage.clickSignupLogin(' Signup / Login');
  await signupPage.verifyNewUserSignupVisible();

  // 6–7
  await signupPage.enterNameAndEmail(username, email);
  await signupPage.clickSignupButton();

  // 8–12
  await signupPage.verifyEnterAccountInformationVisible();
  await signupPage.fillAccountInformation(password);
  await signupPage.fillAddressInformation();

  // 13–14
  await signupPage.clickCreateAccount();
  await accountPage.verifyAccountCreated();

  // 15–16
  await accountPage.clickContinue();
  await accountPage.verifyLoggedIn(username);

  // 17–18
  await accountPage.deleteAccount();
  await accountPage.verifyAccountDeleted();
});

import { expect } from '@playwright/test';

test('Login user and delete account', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);

  // Test data
  const email = 'testuser@example.com';
  const password = 'Password123';
  const username = 'TestUser';

  // 1-3. Launch browser and navigate to URL
  await homePage.navigate();
  await homePage.verifyHomePageVisible();

  // 4. Click on 'Signup / Login' button
  await homePage.clickSignupLogin(' Signup / Login');

  // 5. Verify 'Login to your account' is visible
  await signupPage.verifyLogInToYourVisible();

  // 6. Enter correct email address and password
  await signupPage.enterNameAndEmail(email, password);

  // 7. Click 'Login' button
  await signupPage.clickLoginButton();

  // 8. Verify that 'Logged in as username' is visible
  await expect(page.locator('a:has-text("Logged in as")'))
    .toContainText(username);

  // 9. Click 'Delete Account' button
  await page.click("a[href='/delete_account']");

  // 10. Verify that 'ACCOUNT DELETED!' is visible
  await expect(page.locator('h2')).toHaveText('ACCOUNT DELETED!');
});

