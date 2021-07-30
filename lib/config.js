'use strict';

module.exports = {
  baseUrl: process.env.BASE_URL || 'http://the-internet.herokuapp.com',
  baseBrowser: process.env.BASE_BROWSER || 'chrome',
  selenium: {
    baseGridUrl: process.env.BASE_GRID_URL || 'http://192.168.0.18:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome',
      'maxInstances': 5
    }
  }
};
  