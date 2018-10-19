const devServer = require('./webpack/dev-server');
const entry = require('./webpack/entry');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');

const dev = process.env.NODE_ENV !== 'production';

module.exports = (env) => ({
  devServer,
  entry,
  output,
  plugins,
  mode: dev ? 'development' : 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: { rules },
});
