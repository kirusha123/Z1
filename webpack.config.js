const  HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry:{
        main: path.resolve((__dirname, './src/app.js'))
    },
    output:{
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:'./dist',
        open: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },

            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ]
    }    
}