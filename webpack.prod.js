const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js',
    path: path.join(__dirname, 'dist'),
  },
});