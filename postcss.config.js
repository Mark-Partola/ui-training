const postcssPresetEnv = require("postcss-preset-env");
const nestedCss = require("postcss-nested");

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 0
    }),
    nestedCss()
  ]
};

module.exports = config;
