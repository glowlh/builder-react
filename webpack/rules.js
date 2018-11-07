const path = require('path');
const autoprefixer = require('autoprefixer');

const hasLinter = process.env.HAS_LINTER === '1';
module.exports = [
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
    use: [
      'style-loader',
      { loader: 'css-loader', options: { sourceMap: true } },
      {
        loader: 'postcss-loader', options: {
          sourceMap: true,
          plugins: () => [autoprefixer({
            'browsers': ['> 1%', 'last 2 versions']
          })],
        }
      },
      { loader: 'sass-loader', options: { sourceMap: true } }
    ]
  },
  {
    test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]',
    },
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    include: path.join(__dirname, '/'),
    loaders: [
      'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]'
    ],
  },
  {
    test: /\.ts(x?)$/,
    enforce: 'pre',
    loader: 'tslint-loader',
    exclude: [/node_modules/],
    options: {
      tsConfigFile: 'tsconfig.json',
      emitErrors: hasLinter,
    }
  }
];
