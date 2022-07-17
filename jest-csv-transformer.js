'use strict';

const Papa = require('papaparse');
const { transform } = require('@babel/core');
const jestPreset = require('babel-preset-jest');

module.exports = {
  process(fileContent) {
    return (
      'module.exports = ' + JSON.stringify(Papa.parse(fileContent).data) + ';'
    );
  },
};
