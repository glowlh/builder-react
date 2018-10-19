const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: true,
});

const dev = process.env.NODE_ENV !== 'production';

module.exports = (env) => ({
  mode: dev ? 'development' : 'production',
  devServer: {
    stats: 'errors-only',
    port: 9001,
    historyApiFallback: true,
    host: 'localhost'
  },
  entry: {
    'index': ['@babel/polyfill', './src/ts/index.tsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, '/'),
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]'
        ],
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig]
});
