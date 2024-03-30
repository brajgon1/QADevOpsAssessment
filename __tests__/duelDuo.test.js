const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 10000);
  });
});

// test("When bot is removed it goes back to choices", async () => {
//   await driver.get("http://localhost:8000");
//   const botToAdd = await driver.findElement(By.id(""));
//   await botToAdd.click();
//   const removeButton = await driver.findElement(By.id(""));
//   await removeButton.click();
// })