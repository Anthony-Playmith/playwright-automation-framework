import { Page, Locator } from '@playwright/test';

export class ViewCartPage {
    readonly page: Page;
    readonly table: Locator;
    readonly proceedToCheckoutBtn: Locator;
    readonly cartIsEmptyMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.table = page.locator('#cart_info_table');
        this.proceedToCheckoutBtn = page.getByText('Proceed To Checkout');
        this.cartIsEmptyMessage = page.getByText('Cart is empty! Click here to buy products.');
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

    async clickProceedToCheckout() {
        await this.proceedToCheckoutBtn.waitFor({ state: 'visible' });
        await this.proceedToCheckoutBtn.click();
    }
    async clickDeleteByItemName(itemName: string) {
        const row = this.page.locator('tr', {
            has: this.page.locator('h4 a', { hasText: itemName })
        });

        await row.locator('a.cart_quantity_delete').click();
    }
    getItemRow(itemName: string) {
        return this.page.locator('tr', {
            has: this.page.locator('h4 a', { hasText: itemName })
        });
    }
}