const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    name: 'client',
    target: 'web',
    devtool: 'source-map',
    entry: __dirname + "/observer.js",
    output: {
        path: __dirname + "/dist",
        filename: "observer.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            hash: false,
            filename: 'index.html',
            inject: 'body',
            minify: {
            collapseWhitespace: true
            }
        })
    ],
    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime', 'transform-decorators-legacy'],
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};