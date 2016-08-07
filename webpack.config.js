'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        publicPath: '/',
        filename: '[name].[hash].js',
    },
    plugins: [
       new webpack.ProvidePlugin({
            React: "react",
            ReactDom: "react-dom",
            ReactRouter: "react-router",
            $:"webpack-zepto",
            Zepto:"webpack-zepto",

            //,_: "lodash"
        }),
        new HtmlWebpackPlugin({
          favicon:'./favicon.ico',
          template: 'app/index.tpl.html',
          inject: 'body',
          filename: 'index.html',
          hash: true,
          title: 'Hello World app',
          // minify:{
          //         removeComments:true,
          //         collapseWhitespace:false
          //     }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    resolve: {
  		extensions: ['', '.js', '.css', '.jsx', '.less', '.scss', '.json'],
      // alias: {
      //           lib: path.join(__dirname, "./www_src/lib"),
      //           view: path.join(__dirname, "./www_src/view")
      //       }
  	},
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpeg|gif)$/,
                loader: "file-loader?name=images/[hash:8].[name].[ext]"
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    }
};
