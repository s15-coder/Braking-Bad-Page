const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    entry: {
        index: "./src/js/index.js",
        characters: "./src/js/characters.js",
        episodes: "./src/js/episodes.js",
        quotes: "./src/js/quotes.js",
        characters: "./src/js/characters.js",
        deaths: "./src/js/deaths.js",
    },
    output: {
        filename: "js/pages/[name].[contentHash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    attributes: false
                }
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ["index"]
        }),
        new HtmlWebPackPlugin({
            template: './src/html/characters.html',
            filename: './html/characters.html',
            chunks: ["characters"]
        }),

        new HtmlWebPackPlugin({
            template: './src/html/episodes.html',
            filename: './html/episodes.html',
            chunks: ["episodes"]
        }),

        new HtmlWebPackPlugin({
            template: './src/html/deaths.html',
            filename: './html/deaths.html',
            chunks: ["deaths"]
        }),
        new HtmlWebPackPlugin({
            template: './src/html/quotes.html',
            filename: './html/quotes.html',
            chunks: ["quotes"]
        }),

        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/css/static', to: 'css/static' },
                { from: 'src/assets/', to: 'assets/' },
            ],
        }),
        new MinifyPlugin(),

    ],
}