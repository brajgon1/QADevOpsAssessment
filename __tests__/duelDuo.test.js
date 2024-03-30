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

test("clicking the Draw button displays the div with id choices", async () => {
  await driver.get("http://localhost:8000");
  const drawBtn = await driver.findElement(By.id("draw"));
  await drawBtn.click();
  const choicesDiv = await driver.findElement(By.id("choices"));
  const display = await choicesDiv.isDisplayed();
  expect(display).toBe(true);
})


test("Check that clicking an “Add to Duo” button displays the div with id player duo", async () => {
  await driver.get("http://localhost:8000");
  const drawBtn = await driver.findElement(By.id("draw"));
  await drawBtn.click();
  const choicesDiv = await driver.findElement(By.className("bot-btn"));
  await choicesDiv.click();
  const playerDuo = await driver.findElement(By.id("player-duo"));
  const display = await playerDuo.isDisplayed();
  expect(display).toBe(true);
})

