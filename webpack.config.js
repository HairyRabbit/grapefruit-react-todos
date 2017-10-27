// -*- mode: js -*-
// -*- coding: utf-8 -*-

const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackTemplate = require('html-webpack-template')

module.exports = function (env) {
  const src = path.resolve('src')
  const tmp = path.resolve('tmp')
  const images = path.resolve('public/images')
  const fonts = path.resolve('public/fonts')

  const entry = {
    app: path.resolve(src, 'boot.js')
  }

  const output = {
    path: tmp,
    publicPath: '/',
    filename: '[name].js',
    devtoolModuleFilenameTemplate: info => {
      if(info.absoluteResourcePath.endsWith('css')) return ''
      return `file:///${info.absoluteResourcePath}`.replace(/\\/g, '/')
    }
  }

  const module = {
    rules: [
      // JavaScripts
      { test: /\.js$/, enforce: 'pre', use: 'eslint-loader' },
      { test: /\.js$/, use: 'babel-loader' },

      // Styles
      { test: /\.css$/, use: [
	      'style-loader?sourceMap',
	      'css-loader?sourceMap&modules&importLoaders=0&camelCase',
	      //'postcss-loader',
        //'sass-loader?sourceMap'
      ]},

      // Images
      { test: /\.(webp|png|jpg|svg|eot|ttf|woff|woff2)$/, use: 'url-loader' }
    ]
  }

  const resolve = {
    alias: {}
  }

  const plugins = [
    new HTMLWebpackPlugin({
      title: 'webpack',
      inject: true,
      template: HTMLWebpackTemplate,
      appMountIds: ['app', 'modal']
    }),
    new webpack.NamedModulesPlugin()
  ]

  const devtool = 'source-map'

  const devServer = {
    publicPath: '/',
    contentBase: tmp,
    hot: true,
    host: '0.0.0.0',
    port: '8080',
    historyApiFallback: true
  }

  const cache = true

  return {
    entry,
    output,
    module,
    resolve,
    plugins,
    devtool,
    devServer,
    cache
  }
}
