var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: "src/assets/index.html"
        }),

    ],
    module: {
        rules: [
        ],
    },
};



