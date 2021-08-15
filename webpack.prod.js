const  HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path')

module.exports = {
    mode: "production",
    entry:{
        main: path.resolve((__dirname, './src/app.js'))
    },
    output:{
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,'docs')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ]
    }    
}