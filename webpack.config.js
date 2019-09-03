'use strict';

const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    // context: path.resolve(__dirname, 'src'),
    // entry: ['@babel/polyfill', './js/index.js'],
    output: {
        filename: 'script.js'
    },
    mode: 'development',
    watch: true,
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader?optional[]=runtime',
                    options: {
                        presets: [
                            ["@babel/env", {
                                targets: {
                                    edge: "17",
                                    firefox: "60",
                                    chrome: "67",
                                    safari: "11.1",
                                    ie: "11"
                                }
                            }]
                        ]
                    }
                }

            }
        ]
    },
    plugins: [
        // new UglifyJsPlugin()
    ]
};