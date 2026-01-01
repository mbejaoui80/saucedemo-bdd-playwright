const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

Given('Je suis sur la page de connexion', async function () {
  // "this.page" a été créé dans le fichier hooks.js !
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('Je me connecte avec {string} et {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('Je devrais être redirigé vers la page {string}', async function (keyword) {
  // On vérifie que l'URL contient le mot clé (ex: inventory)
  await expect(this.page).toHaveURL(new RegExp(keyword));
}); // 👈 C'est ici qu'il manquait la fermeture !

Then('Je devrais voir un message d\'erreur contenant {string}', async function (messageAttendu) {
  // On récupère le texte via notre Page Object
  const messageReel = await this.loginPage.getErrorMessage();
  // On vérifie que le message réel contient le texte attendu
  expect(messageReel).toContain(messageAttendu);
});