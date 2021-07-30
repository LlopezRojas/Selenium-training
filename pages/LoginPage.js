'use strict';

const BasePage = require('./BasePage');

const USERNAME_INPUT = {
  id: 'username'
};
const PASSWORD_INPUT = {
  id: 'password'
};
const SUBMIT_BUTTON = {
  css: 'button'
};
const SUCCESS_MESSAGE = {
  css: '.flash.success'
};
const FAILURE_MESSAGE = {
  css: '.flash.error'
};

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async load() {
    await this.visit('/login');
  }

  async authentication(username, password) {
    await this.sendKeys(USERNAME_INPUT, username);
    await this.sendKeys(PASSWORD_INPUT, password);
    await this.click(SUBMIT_BUTTON);
  }

  async successMessageIsPresent() {
    return this.isDisplayed(SUCCESS_MESSAGE);
  }
  async failureMessageIsPresent() {
    return this.isDisplayed(FAILURE_MESSAGE);
  }
}

module.exports = LoginPage;