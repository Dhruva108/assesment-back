const express = require('express');
const morgan = require('morgan');

function configExpress(api) {
  api.use(express.json());
  api.use(morgan('dev'));
}

module.exports = configExpress;
