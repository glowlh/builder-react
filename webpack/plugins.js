const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: true,
});

module.exports = [HTMLWebpackPluginConfig];
