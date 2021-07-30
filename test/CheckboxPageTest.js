'use strict';

const assert = require('chai').assert;
const CheckboxPage = require('../pages/CheckboxPage');
require('./BaseTest');

describe('Interaction with checkboxes', function () {
  let checkboxPage;

  beforeEach(async function () {
    checkboxPage = new CheckboxPage(this.driver);
    await checkboxPage.load();
  });

  it('Select one checkbox', async function () {
    await checkboxPage.uncheckDefaultCheckbox();
    await checkboxPage.checkOneCheckbox(0);
    let checkboxes = await checkboxPage.checkSelectedCheckbox();
    assert.equal(checkboxes.length, 1, 'The checkboxes selected is bad');
  });
  it('Select all checkboxes', async function () {
    await checkboxPage.uncheckDefaultCheckbox();
    await checkboxPage.checkAllCheckboxes();
    let checkboxes = await checkboxPage.checkSelectedCheckbox();
    assert.equal(checkboxes.length, 2, 'The checkboxes selected is bad');
  });
  it('Uncheck all checkboxes', async function () {
    await checkboxPage.uncheckDefaultCheckbox();
    let checkboxes = await checkboxPage.checkSelectedCheckbox();
    assert.equal(checkboxes.length, 0, 'The checkboxes selected is bad');
  });
});