var path = require('path');

module.exports = {
  entry: [
    "@babel/polyfill", //arrow function, promise,...
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,  //if it's a js file -> use babel-loader
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'] //test with babelrc file
          }
        }
      }
    ]
  }
};