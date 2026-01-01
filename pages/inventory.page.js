class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButtons = page.locator('[data-test^="add-to-cart"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addItemToCart() {
    await this.addToCartButtons.first().click();
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }
}
module.exports = { InventoryPage };