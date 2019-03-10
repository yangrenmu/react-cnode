const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../dist'),
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
    }),
    new CleanWebpackPlugin()
  ],
  // module: 对模块的源码进行转换
  module: {
    rules: [
      { test: /\.js|jsx$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  devServer: {
    // noInfo: true,
    stats: "errors-only",
  }
}