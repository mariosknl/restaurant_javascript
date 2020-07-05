// eslint-disable-next-line import/no-extraneous-dependencies
import HtmlWebpackPlugin from 'html-webpack-plugin';


export const entry = {
  main: './src/index.js',
  vendor: './src/vendor.js',
};
export const plugins = [new HtmlWebpackPlugin({
  template: './src/template.html',
})];
export const module = {
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
};