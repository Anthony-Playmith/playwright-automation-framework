import { Page, Locator } from '@playwright/test';

export class PaymentDonePage {
    readonly page: Page;
    readonly table: Locator;
    readonly orderPlacedMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.table = page.locator('#cart_info_table');
        this.orderPlacedMessage = page.getByText('Order Placed!');
    }
    async clickProceedToCheckout() {
        await this.orderPlacedMessage.click();
    }

    
}