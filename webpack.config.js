var path = require('path');
var webpack = require('webpack');
module.exports = {
    resolve: {
        root: [
            path.resolve('./app/global/components'),
            path.resolve('./app/global/supports'),
            path.resolve('./app/modules/$redux'),
            path.resolve('./app/editor'),
        ],
        extensions: [
            '', '.js', '.jsx'
        ],
        alias: { //给index.js添加别称
            'rootIndex': path.resolve('./app/index.jsx')
        }
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './app/index.js')
    ],
    output: {
        //path: path.resolve(__dirname, 'build/bundles'),
        //filename:'bundle.js'
        path: __dirname + '/build',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.(jpg|png)$/,
                loader: "url?limit=8192"
            }, {
                test: /\.scss$/,
                loader: "style!css!sass"
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
        new webpack.HotModuleReplacementPlugin()
    ]
};
