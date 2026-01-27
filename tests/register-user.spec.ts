import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SignupPage } from '../pages/signup.page';
import { AccountPage } from '../pages/account.page';

test('Register User - Automation Exercise', async ({ page }) => {
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
  await homePage.clickSignupLogin();
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
