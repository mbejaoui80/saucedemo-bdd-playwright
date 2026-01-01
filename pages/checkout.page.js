class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.completeHeader = page.locator('.complete-header');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async fillInformation(first, last, zip) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.postalCodeInput.fill(zip);
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async getSuccessMessage() {
    return await this.completeHeader.textContent();
  }
}

module.exports = { CheckoutPage };