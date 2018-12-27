const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  // 引入以下类型文件可无需指定扩展名
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: [
    './src/main.ts'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',  // 开放外部访问
    port: '8080',
    contentBase: false,
    hot: true,  // 开启模块热替换
    disableHostCheck: true  // 解决 Invalid Host header
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello',
      filename: 'index.html',
      template: './src/assets/template.html',
      favicon: './src/assets/favicon.ico'
    })
  ]
}