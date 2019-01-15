const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const config = require('./config')
const CleanWebpackPlugin = require('clean-webpack-plugin')


const webpackDemoConfig = merge(webpackBaseConfig, {
    plugins: [
        new CleanWebpackPlugin(['docs'], {
            root: config.basePath,
            exclude:  ['CNAME'],
            verbose:  true,
            dry:      false
        })
    ]
})


module.exports = webpackDemoConfig