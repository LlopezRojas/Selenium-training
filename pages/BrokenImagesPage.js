'use strict';

const statusValidation = require('../utils/utils');
const BasePage = require('./BasePage');

const CONTAINER = {
  css: '.example'
};
const IMAGES = {
  tagName: 'img'
};

class BrokenImagesPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async load() {
    await this.visit('/broken_images');
  }

  getImages() {
    let element = this.findElement(CONTAINER);
    return element.findElements(IMAGES);
  }
  async statusImages() {

    let images = await this.getImages();
    let status = [];

    for (const i of images) {
      let imgStatus = statusValidation(await i.getAttribute('src'));
      status.push(await imgStatus);
    }
    return status;
  }
}

module.exports = BrokenImagesPage;