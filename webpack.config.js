const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/js/main.js'),

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  devServer: {
    port: 3000,
    open: true
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}