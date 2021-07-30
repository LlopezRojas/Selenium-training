'use strict';

const expect = require('chai').expect;
const ImagesBrokenPage = require('../pages/BrokenImagesPage');
require('./BaseTest');

describe('Broken Image Page', function () {
  let imagePage;

  beforeEach(async function () {
    imagePage = new ImagesBrokenPage(this.driver);
    await imagePage.load();
  });

  it('Identify if is a least one broken image', async function () {
    let statusImages = await imagePage.statusImages();
    expect(statusImages).to.include(404);
  });

});