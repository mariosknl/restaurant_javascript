const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
          // Creates `style` nodes from JS strings
            loader: 'style-loader',
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