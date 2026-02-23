import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly continueShoppingButton: Locator;
    readonly viewCartLink: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
        this.viewCartLink = this.page.getByRole('link', { name: 'View Cart' });
        this.searchInput = this.page.locator('#search_product');
        this.searchButton = this.page.locator('#submit_search');
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
    async searchForProduct(product: string): Promise<void> {
        await this.searchInput.fill(product);
        await this.searchButton.click();
    }
    getProductCard(price: string, productName: string) {
        return this.page.locator('.product-image-wrapper')
            .filter({ has: this.page.locator('h2', { hasText: price }) })
            .filter({ has: this.page.locator('p', { hasText: productName }) });
    }
    async expandCategory(category: string) {
        console.log(`Attempting to expand category: ${category}`);

        const categoryLink = this.page
            .locator('#accordian .panel-title a', {
                hasText: new RegExp(`^\\s*${category}\\s*$`, 'i')
            });

        const count = await categoryLink.count();
        console.log(`Found ${count} matching elements for category: ${category}`);

        if (count > 0) {
            const text = await categoryLink.first().textContent();
            console.log(`Category text: "${text}"`);
            await categoryLink.first().click();
            console.log('Clicked category');

            // Wait a bit for expansion
            await this.page.waitForTimeout(1000);
        } else {
            console.log('Category not found!');
        }
    }
    getSubCategory(category: string, subCategory: string) {
        const categoryPanel = this.page.locator('#accordian .panel')
            .filter({
                has: this.page.locator('.panel-title a', {
                    hasText: new RegExp(`^\\s*${category}\\s*$`, 'i')
                })
            });

        return categoryPanel.locator('.panel-collapse a', {
            hasText: new RegExp(`^\\s*${subCategory}\\s*$`, 'i')
        });
    }

}