'use strict';

const assert = require('chai').assert;
const SliderPage = require('../pages/HorizontalSliderPage');
require('./BaseTest');

describe('Slider interaction ', function () {
  let slider;

  beforeEach(async function () {
    slider = new SliderPage(this.driver);
    await slider.load();
  });

  it('display the right value', async function () {
    let value = '4';
    await slider.setSliderValue(value);
    assert.equal(await slider.getSliderValue(), value, 'Slider value is incorrect');
  });
});