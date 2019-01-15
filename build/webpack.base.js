const path = require('path')
const config  = require('./config')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const FlowWebpackPlugin = require('flow-webpack-plugin')
const webpack = require('webpack')
const ENV = process.env.NODE_ENV

module.exports = {
    entry: path.resolve(config.basePath, './src/index.js'),
    output: {
        filename: 'js/index.[hash].js',
        path: path.resolve(config.basePath, './docs'),
        publicPath: './'
    },

    devtool: 'inline-source-map',
    
    resolve: {
        extensions: [".js", ".json"],
        modules: ['node_modules'],
        alias: {
            '@': config.basePath,
            '@src': config.srcPath,
            'core': path.resolve(config.vuePath, './core'),
            'shared': path.resolve(config.vuePath, './shared'),
            'sfc': path.resolve(config.vuePath, './sfc'),
            'server': path.resolve(config.vuePath, './server'),
            'platforms': path.resolve(config.vuePath, './platforms'),
            'compiler': path.resolve(config.vuePath, './compiler'),
            'weex': path.resolve(config.vuePath, './platforms/weex'),
            'web': path.resolve(config.vuePath, './platforms/web')
        }
    },  
    
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.html$/,
            use: [{loader: 'html-loader'}]
        }]
    },

    devServer: {
        host: '0.0.0.0',
        publicPath: '/',
        hot: true
    },

    plugins: [
        new ProgressBarPlugin(),
        new htmlWebpackPlugin({
            template: path.join(config.basePath, './src/index.html'),
            inject: 'body'
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __WEEX__: false,
            // 'process.env': {
            //   NODE_ENV: '"development"',
            //   TRANSITION_DURATION: 50,
            //   TRANSITION_BUFFER: 10
            // }
        })
        // new FlowWebpackPlugin()
    ]
}