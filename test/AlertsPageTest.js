'use strict';

const assert = require('chai').assert;
const AlertsPage = require('../pages/AlertsPage');
require('./BaseTest');

describe('Javascript Alerts', function () {
  let alert;

  beforeEach(async function () {
    alert = new AlertsPage(this.driver);
    await alert.load();
  });

  it('accept alert', async function () {
    await alert.triggerAlert();
    await alert.alertClickToAccept();
    assert.equal(await alert.getResult(), 'You successfully clicked an alert', 'Results text incorrect');

  });
  it('get text from alert', async function () {
    await alert.triggerConfirm();
    let text = await alert.alertGetText();
    await alert.alertClickToDismiss();
    assert.equal(text, 'I am a JS Confirm', 'Alert text incorrect');
  });
  it('set input in alert', async function () {
    let text = 'This a test string';
    await alert.triggerPrompt();
    await alert.alertSetInput(text);
    await alert.alertClickToAccept();
    assert.equal(await alert.getResult(), 'You entered: ' + text, 'Results text incorrect');
  });
});