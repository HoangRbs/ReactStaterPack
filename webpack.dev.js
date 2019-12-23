const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
  mode: 'development',
  module: {
    rules: [
      {
        test:/\.scss$/,
        exclude: /(node_modules)/,
        use: [  
          //the order is the most important
          //understand the workflow first -> use correct order -> the last one in the array
          //will be used first
          
          'style-loader', //turn the below CSS_JS code into CSS and add into HTML DOM (html file) -> not saperate css file
          'css-loader',   //turn the below CSS require/import into CSS_JS code
          'sass-loader'   //turn SCSS into CSS
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'          //create a index.html file in dist (dynamically)
    })
  ],
  devServer: { //webpack dev server is gonna build all things for us -> but on virtual "dist" folder -> to adapt changes on the fly
    contentBase: path.join(__dirname, 'dist'),//
    port: 8080
  },
  devtool: 'cheap-module-eval-source-map'
});