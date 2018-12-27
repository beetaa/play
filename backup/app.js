const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('../webpack.config.js')

const app = express()
const compiler = webpack(config)

app.get('/hello', (req, res) => {
  res.send('<h1>中文222</h1>')
})

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.listen(8080, () => {
  console.log('Server Started at Port 8080.')
})