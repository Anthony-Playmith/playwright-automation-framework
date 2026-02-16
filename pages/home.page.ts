import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) { }

  async navigate() {
    await this.page.goto('/');
  }

  async verifyHomePageVisible() {
    await expect(this.page).toHaveTitle(/Automation Exercise/);
  }

  async clickSignupLogin(linkName: string) {
    await this.page.getByRole('link', { name: linkName }).click();
  }

  async clickMenuOption(optionName: string) {
  await this.page.getByRole('link', { name: optionName }).click();
}
}
