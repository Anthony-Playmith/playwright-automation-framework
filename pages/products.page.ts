import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly continueShoppingButton: Locator;
    readonly viewCartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
        this.viewCartLink = this.page.getByRole('link', { name: 'View Cart' });
    }

    async addItemToCart(options: {
        name?: string;
        price?: string;
        productId?: string;
    }) {
        let product = this.page.locator('.product-image-wrapper');

        if (options.name) {
            product = product.filter({
                has: this.page.locator('.productinfo p', { hasText: options.name })
            });
        }

        if (options.price) {
            product = product.filter({
                has: this.page.locator('.productinfo h2', { hasText: options.price })
            });
        }

        if (options.productId) {
            product = product.filter({
                has: this.page.locator(`a.add-to-cart[data-product-id="${options.productId}"]`)
            });
        }

        const addButton = product.locator('a.add-to-cart').first();

        await addButton.waitFor({ state: 'visible' });
        await addButton.click();
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.waitFor({ state: 'visible' });
        await this.continueShoppingButton.click();
    }
    async clickViewCart() {
        await this.viewCartLink.waitFor({ state: 'visible' });
        await this.viewCartLink.click();
    }

}