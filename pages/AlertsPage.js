'use strict';

const {
  until
} = require('selenium-webdriver');
const BasePage = require('./BasePage');

const ALERT_BTN = {
  xpath: './/button[text()="Click for JS Alert"]'
};
const CONFIRM_BTN = {
  xpath: './/button[text()="Click for JS Confirm"]'
};
const PROMPT_BTN = {
  xpath: './/button[text()="Click for JS Prompt"]'
};
const RESULTS = {
  id: 'result'
};

class AlertsPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async load() {
    await this.visit('/javascript_alerts');
  }
  async triggerAlert() {
    await this.click(ALERT_BTN);
  }

  async triggerConfirm() {
    await this.click(CONFIRM_BTN);
  }

  async triggerPrompt() {
    await this.click(PROMPT_BTN);
  }

  async alertClickToAccept() {
    await this.driver.switchTo().alert().accept();
  }

  async alertClickToDismiss() {
    await this.driver.switchTo().alert().dismiss();
  }

  async alertGetText() {
    await this.driver.wait(until.alertIsPresent());
    let alert = await this.driver.switchTo().alert();
    return alert.getText();
  }

  async alertSetInput(text) {
    await this.driver.switchTo().alert().sendKeys(text);
  }

  async getResult() {
    return this.getText(RESULTS);
  }

}

module.exports = AlertsPage;