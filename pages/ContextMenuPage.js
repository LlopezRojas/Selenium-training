'use strict';

const {
  until
} = require('selenium-webdriver');
const BasePage = require('./BasePage');

const BOX = {
  id: 'hot-spot'
};

class ContextMenuPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async load() {
    await this.visit('/context_menu');
  }

  async rightClickInBox() {
    this.rightClick(BOX);
  }

  async getPopUpText() {
    await this.driver.wait(until.alertIsPresent());
    let alert = await this.driver.switchTo().alert();
    return alert.getText();
  }

  async acceptPopUp() {
    await this.driver.switchTo().alert().accept();
  }
}

module.exports = ContextMenuPage;