import { Page, expect } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async verifyNewUserSignupVisible() {
    await expect(this.page.getByText('New User Signup!')).toBeVisible();
  }

  async verifyLogInToYourVisible() {
    await expect(this.page.getByText('Login to your account')).toBeVisible();
  }

  async enterNameAndEmail(name: string, email: string) {
    await this.page.getByPlaceholder('Name').fill(name);
    await this.page.getByPlaceholder('Email Address').nth(1).fill(email);
  }

  async clickSignupButton() {
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

  async verifyEnterAccountInformationVisible() {
    await expect(this.page.getByText('Enter Account Information')).toBeVisible();
  }

  async fillAccountInformation(password: string) {
    await this.page.getByLabel('Mr.').check();
    await this.page.getByLabel('Password *').fill(password);

    await this.page.selectOption('#days', '10');
    await this.page.selectOption('#months', '5');
    await this.page.selectOption('#years', '1995');

    await this.page.getByLabel('Sign up for our newsletter!').check();
    await this.page.getByLabel('Receive special offers from our partners!').check();
  }

  async fillAddressInformation() {
    await this.page.getByLabel('First Name *').fill('John');
    await this.page.getByLabel('Last Name *').fill('Doe');
    //await this.page.getByLabel('Company').fill('Playwright Inc');
    await this.page.getByLabel('Address *').fill('123 Main Street');
    await this.page.getByLabel('Address 2').fill('Apartment 4');
    await this.page.selectOption('#country', 'United States');
    await this.page.getByLabel('State *').fill('California');
    await this.page.fill('#city', 'Los Angeles');
    await this.page.fill('#zipcode', '90001');
    await this.page.getByLabel('Mobile Number *').fill('1234567890');
  }

  async clickCreateAccount() {
    await this.page.getByRole('button', { name: 'Create Account' }).click();
  }
}
