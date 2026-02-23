import { test, expect } from '../fixtures/pages.fixture';

test('Register User', async ({ homePage, signupPage, accountPage }) => {

  const username = 'anthony';
  const email = `anthony${Date.now()}@testmail.com`;
  const password = 'Password123';

  // 1–3
  await homePage.navigate();
  await homePage.verifyHomePageVisible();

  // 4–5
  await homePage.clickMenuOption(' Signup / Login');
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