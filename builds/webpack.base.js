const { resolvePath } = require('../utils/index')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: resolvePath('../src/main.ts'),
  output: {
    path: resolvePath('../dist'),
    filename: '[name].[contenthash].bandle.js'
  },
  module: {
    rules: [
      {
        test: /.ts(x)?$/,
        loader: 'babel-loader'
      },
      {
        test: /.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
