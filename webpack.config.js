var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
module.exports = {
  entry:"./client/main.js",
  output:{
    path:__dirname + "/public",
    filename:"[name].[hash].js"
  },
  module:{
    loaders:[
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', '!css-loader!sass-loader') },
      { test: /\.(ttf|eot|svg|png|jpg)$/, loader: 'file-loader' }
    ]
  },
  plugins:[
    new ExtractTextPlugin('[name].[hash].css'),
    new AssetsPlugin({
      path: __dirname + "/config",
      filename: 'static-assets.json',
      prettyPrint: true
    })
  ]
};
