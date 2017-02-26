const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(webpackConfig)
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '.'),
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: true
}))
app.use(express.static(path.resolve(__dirname, '.')))
app.listen(3000)
console.log(`Server is now running at http://localhost:3000.`)
