'use strict';

const {
  Key
} = require('selenium-webdriver');
const BasePage = require('./BasePage');

const SLIDER_VALUE = {
  id: 'range'
};
const SLIDER = {
  css: '.sliderContainer input'
};

class HorizontalSliderPage extends BasePage {

  constructor(driver) {
    super(driver);
  }

  async load() {
    await this.visit('/horizontal_slider');
  }
  getSliderValue() {
    return this.getText(SLIDER_VALUE);
  }

  async setSliderValue(value) {
    while (await this.getSliderValue() !== value) {
      await this.sendKeys(SLIDER, Key.ARROW_RIGHT);
    }
  }
}

module.exports = HorizontalSliderPage;