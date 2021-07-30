'use strict';

const assert = require('chai').assert;
const LoginPage = require('../pages/LoginPage');
require('./BaseTest');

describe('Login', function () {
  let login;

  beforeEach(async function () {
    login = new LoginPage(this.driver);
    await login.load();
  });

  it('with valid credentials', async function () {
    await login.authentication('tomsmith', 'SuperSecretPassword!');
    assert.equal(await login.successMessageIsPresent(), true, 'Success message not displayed');
  });

  it('with invalid credentials', async function () {
    await login.authentication('tomsmith', 'NotSuperSecretPassword!');
    assert.equal((await login.failureMessageIsPresent()), true, 'Failure message displayed');
  });
});