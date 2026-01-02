const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

// 💡 LA MODIFICATION EST ICI :
// On augmente le temps limite à 60 secondes (60 * 1000 ms) pour être tranquille.
setDefaultTimeout(60 * 1000);

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

AfterAll(async function () {
  await browser.close();
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.context.close();
});