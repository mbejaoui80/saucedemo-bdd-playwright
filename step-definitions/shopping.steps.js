const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { InventoryPage } = require('../pages/inventory.page');

When('Je clique sur le bouton ajouter au panier du premier produit', async function () {
  this.inventoryPage = new InventoryPage(this.page);
  await this.inventoryPage.addItemToCart();
});

Then('Le badge du panier devrait afficher {string}', async function (nombreAttendu) {
  const nombreReel = await this.inventoryPage.getCartCount();
  expect(nombreReel).toBe(nombreAttendu);
});

const { CheckoutPage } = require('../pages/checkout.page');

When('Je vais dans le panier et je passe au paiement', async function () {
  // On clique sur le panier (le badge)
  await this.inventoryPage.cartBadge.click(); 
  
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.proceedToCheckout();
});

When('Je remplis les informations de livraison avec {string}, {string}, {string}', async function (prenom, nom, code) {
  await this.checkoutPage.fillInformation(prenom, nom, code);
});

When('Je finalise la commande', async function () {
  await this.checkoutPage.finishOrder();
});

Then('Je devrais voir le message de succès {string}', async function (messageAttendu) {
  const messageReel = await this.checkoutPage.getSuccessMessage();
  expect(messageReel).toBe(messageAttendu);
});