const express = require('express');

function configExpress(api) {
  api.use(express.json());
}

module.exports = configExpress;
