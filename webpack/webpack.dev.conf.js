var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[hash].js'
  },
  // resolve: 依赖的 module，被解决的方式
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // plugins: 用于各种插件自定义 webpack 构建过程
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // module: 对模块的源码进行转换
  module: {
    rules: [
      { test: /\.js|jsx$/, use: ['babel-loader'], exclude: /node_modules/ }
    ]
  }
}