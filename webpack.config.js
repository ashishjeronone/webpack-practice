const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dashBoardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: ['./src/js/index.js'],

    output: {

    },

    devServer: {
        stats: "errors-only",
        overlay: true,
        port: 3000
    },

    plugins: [
        new htmlWebpackPlugin({
            title: "webpack demo"
        }),

        new dashBoardPlugin({ port: 3000 })
    ],

    module: {

    }
}