const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const namespace = 'menu-animation';
const context = path.resolve(__dirname, namespace);

module.exports = {
  mode: 'none',
  watch: true,
  context,
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: context + '/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  }
};