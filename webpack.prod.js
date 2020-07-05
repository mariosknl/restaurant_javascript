const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].[contentHash].css',
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
          // Extract css into files
            loader: MiniCssExtractPlugin.loader,
          },
          {
          // Translates CSS into CommonJS
            loader: 'css-loader',
          },
          {
          // Compiles Sass to CSS
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
});