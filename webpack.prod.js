const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.join(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
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