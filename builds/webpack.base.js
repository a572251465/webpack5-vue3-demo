const { resolvePath } = require('../utils/index')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: resolvePath('../src/main.ts'),
  devtool: false,
  output: {
    path: resolvePath('../dist'),
    filename: '[name].[contenthash].bandle.js'
  },
  resolve: {
    // -- 别名
    alias: {
      '@': resolvePath('../src')
    },
    // -- 默认文件后缀
    extensions: ['.vue', '.ts', '.tsx', '.js', 'jsx'],
    // -- 第三方包
    fallback: {
      querystring: false
    }
  },
  optimization: {
    moduleIds: 'deterministic',
    chunkIds: 'deterministic'
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.png$/,
        type: 'asset/resource'
      },
      {
        test: /\.ico$/,
        type: 'asset/inline'
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.jpg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
