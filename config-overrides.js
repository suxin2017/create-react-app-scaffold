const path = require('path')
const {override, addLessLoader, addWebpackAlias } = require("customize-cra");

module.exports =  override(
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  }),
  addWebpackAlias({
        ['components']: path.resolve(__dirname, 'src/components/'),
        ['util']: path.resolve(__dirname, 'src/util/')
  }),
);
