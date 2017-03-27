'use strict';

const path = require('path');
const webpack = require('webpack');

const nodeModulesDirectories = path.join(__dirname, 'node_modules');
const modules = [nodeModulesDirectories];
const inputPath = path.join(__dirname, './source/js/');

const plugins = [

  new webpack.NoEmitOnErrorsPlugin(),

  new webpack.optimize.CommonsChunkPlugin({
    name: 'foundation',
    filename: 'foundation.js'
  }),

  new webpack.DefinePlugin({ NODE_ENV: JSON.stringify($.dev ? '__DEV__' : '__PROD__') })
];

const rules = [

  {
    test: /\.html$/,
    loader: `ngtemplate?relativeTo=${inputPath}!html`
  },
  {
    test: /\.js$/,
    include: path.join(__dirname, 'source/js'),
    loader: 'babel-loader',
    query: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
    }
  },
  {
    test: /\.pug$/,
    loader: 'pug-loader'
  }
];

if (!$.dev) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      drop_console: true
    })
  );
}

const webpackConfig = {

  context: path.resolve(__dirname, 'source/js'),

  entry: {
    app: './app.js',
    foundation: []
  },

  output: {
    path: path.join(__dirname, $.config.root, '/assets/js'),
    filename: '[name].js'
  },

  watch: $.dev,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: $.dev ? 'inline-source-map' : undefined,

  module: {
    rules,
    noParse: []
  },

  plugins,

  resolve: {
    modules,
    extensions: ['.js'],
    alias: {}
  },

  resolveLoader: {
    modules,
    extensions: ['.js']
  }
};

$.path.foundation.forEach((dependency) => {
  const dependencyName = dependency.split('/')[0];
const dependencyPath = path.resolve(nodeModulesDirectories, dependency);

webpackConfig.resolve.alias[dependencyName] = dependencyPath;
webpackConfig.module.noParse.push(dependencyPath);
webpackConfig.entry.foundation.push(dependencyName);
});

module.exports = webpackConfig;
