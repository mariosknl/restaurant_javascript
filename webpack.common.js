const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',

  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
  })],
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
};