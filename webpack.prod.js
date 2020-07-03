const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.join(__dirname, 'dist'),
  },
});