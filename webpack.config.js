let path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "./src/js/main.js"),
    output: {
        path: path.resolve(__dirname, "output"),
        filename: "index.js"
    },
    mode: "production",
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        filename:"index.html",
        template:"./index.html"
      }),
      new CopyWebpackPlugin({
          patterns: [
              { from: 'src/img', to: 'src/img' },
              { from: 'src/font', to: "src/font"}
          ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i, 
          type: 'asset/resource',
        },
        {
          test: /\.(ttf)$/i, 
          type: 'asset/resource',
        }
      ],
    },
    devServer:{
      static:{
          directory:path.join(__dirname, "./")
      },
      port:5020
    },
    optimization: {
      minimizer: [
        "...",
        new CssMinimizerPlugin(),
      ],
    },
}