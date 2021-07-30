'use strict';

const assert = require('chai').assert;
const ContextPage = require('../pages/ContextMenuPage');
require('./BaseTest');

describe('Context Page', function () {
  let contextPage;

  beforeEach(async function () {
    contextPage = new ContextPage(this.driver);
    await contextPage.load();
  });

  it('should accept alert', async function () {
    await contextPage.rightClickInBox();
    let message = await contextPage.getPopUpText();
    await contextPage.acceptPopUp();
    assert.equal(message, 'You selected a context menu', 'Popup message incorrect');
  });

});