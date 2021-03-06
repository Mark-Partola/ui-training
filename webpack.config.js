const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const namespace = process.env.PROJECT_ROOT;
const context = path.resolve(__dirname, namespace);

module.exports = {
  mode: "none",
  context,
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: context + "/dist"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin(["manifest.json", "sw.js"])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      }
    ]
  }
};
