const { merge } = require('webpack-merge')
const { resolvePath } = require('../utils/index')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  // -- 缓存 用来提高构建速度
  cache: {
    type: 'filesystem',
    cacheDirectory: resolvePath('../.temp_cache')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
})
