const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'gifuct-js.all.js',
    library: 'GifuctJS',
    libraryTarget: 'umd',
  },
  entry: './src/index.js',
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimize: false,
  },
}
