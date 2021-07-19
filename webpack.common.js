const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
        main: path.resolve((__dirname, './src/app.js'))
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
    //   {
    //     test: /\.(svg|png|jpg|gif)$/,
    //     use: {
    //       loader: "file-loader",
    //       options: {
    //         name: "[name].[hash].[ext]",
    //         outputPath: "imgs"
    //       }
    //     }
    //   }
    ]
  }
};