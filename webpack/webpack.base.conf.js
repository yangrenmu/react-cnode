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
    extensions: ['', '.js', '.jsx']
  },
  // 
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}