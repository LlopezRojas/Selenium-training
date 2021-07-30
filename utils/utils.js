'use strict';

const axios = require('axios');

async function getStatus(url) {
  try {
    const response = await axios.get(url);
    return response.status;
  } catch (error) {
    return error.response.status;
  }
}

module.exports = getStatus;
