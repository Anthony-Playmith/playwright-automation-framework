import { Page, Locator } from '@playwright/test';

export class PaymentPage {
    readonly page: Page;
    readonly nameOnCardInput: Locator;
    readonly cardNumberInput: Locator;
    readonly cvcInput: Locator;
    readonly expMonthInput: Locator;
    readonly expYearInput: Locator;
    readonly payButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
        this.cardNumberInput = page.locator('[data-qa="card-number"]');
        this.cvcInput = page.locator('[data-qa="cvc"]');
        this.expMonthInput = page.locator('[data-qa="expiry-month"]');
        this.expYearInput = page.locator('[data-qa="expiry-year"]');
        this.payButton = page.locator('[data-qa="pay-button"]');
    }

    async fillCardDetails(
        nameOnCard: string,
        cardNumber: string,
        cvc: string,
        expMonth: string,
        expYear: string
    ): Promise<void> {
        await this.nameOnCardInput.fill(nameOnCard);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expMonthInput.fill(expMonth);
        await this.expYearInput.fill(expYear);
    }

    async clickPayAndConfirm(): Promise<void> {
        await this.payButton.click();
    }

}