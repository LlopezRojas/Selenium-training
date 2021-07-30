'use strict';

const BasePage = require('./BasePage');

const IMAGES = {
  className: 'figure'
};
const DESCRIPTION = {
  className: 'figcaption'
};
const Example = 'figcaption';
const TITLE_DESC = {
  css: 'h5'
};
const LINK_DESC = {
  css: 'a'
};

class HoverPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async load() {
    await this.visit('/hovers');
  }
  async hoverImage() {
    let image = await this.findElements(IMAGES);
    await this.hover(image[1]);
  }
  async isCaptionDisplayed() {
    return this.waitForIsDisplayed(Example, 10000);
  }
  async getCaptionTitle() {
    return this.getText(TITLE_DESC);
  }
  async getCaptionLink() {
    return this.findElement(LINK_DESC).getAttribute('href');
  }
}

module.exports = HoverPage;