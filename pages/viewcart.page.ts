import {Page, Locator } from '@playwright/test';

export class ViewCartPage {
    readonly page: Page;
    readonly table: Locator;

    constructor(page: Page) {
        this.page = page;
        this.table = page.locator('#cart_info_table');
    }

    async getItem(description: string) {
        const row = this.table.locator('tbody tr').filter({
            has: this.page.locator('.cart_description', { hasText: description })
        });

        return {
            description: await row.locator('.cart_description').innerText(),
            price: await row.locator('.cart_price').innerText(),
            quantity: await row.locator('.cart_quantity').innerText(),
            total: await row.locator('.cart_total').innerText()
        };
    }
}