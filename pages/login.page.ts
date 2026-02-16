import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    async login(username: string, password: string): Promise<void> {
        await this.page.locator('[data-qa="login-email"]').fill(username);
        await this.page.locator('[data-qa="login-password"]').fill(password);
        await this.page.locator('[data-qa="login-button"]').click();
    }

}
