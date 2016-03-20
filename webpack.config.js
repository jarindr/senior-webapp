'use strict'
const webpack = require('webpack')
const BowerWebpackPlugin = require("bower-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  output: {
    path: __dirname + '/build',
    filename: "js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_module|jquery)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(woff|svg|ttf|eot)([\?]?.*)$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",

    }),
    new BowerWebpackPlugin({
      modulesDirectories: ["bower_components"],
      manifestFiles:      "./bower.json",
      includes:           /.*/,
      excludes:           /.*\.less/,
      searchResolveModulesDirectories: true
    })
  ]
};
