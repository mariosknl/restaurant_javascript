const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
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