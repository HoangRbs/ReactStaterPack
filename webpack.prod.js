const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',          //create a index.html file in dist (dynamically)
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      }
    })
  ],
  module: {
    rules: [
      {
        test:/\.scss$/,
        exclude: /(node_modules)/,
        use: [  
          //the order is the most important
          //understand the workflow first -> use correct order -> the last one in the array
          //will be used first
          
          {
            loader: MiniCssExtractPlugin.loader,  //turn the CSS_JS code into seperate CSS file
          },
          'css-loader',   //turn the below CSS require/import into CSS_JS code
          'sass-loader'   //turn SCSS into CSS
        ],
      }
    ]
  },
});