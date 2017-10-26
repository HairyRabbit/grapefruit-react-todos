// -*- mode: js -*-
// -*- coding: utf-8 -*-

const path = require('path')
const { spawn, exec } = require('child_process')
const webpack = require('webpack')
const MemoryFS = require('memory-fs')
// import jest from 'jest'


function makeOptions(env) {

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
    filename: '[name].js'
  }

  const module = {
    rules: [
      // JavaScripts
      { test: /\.js$/, enforce: 'pre', use: 'eslint-loader' },
      { test: /\.js$/, use: 'babel-loader' },

      // Styles
      { test: /\.css$/, use: [
	      'style-loader?sourceMap',
	      'css-loader?sourceMap&module&modules&importLoaders=1&camelCase',
	      'postcss-loader?sourceMap'
      ]},

      // Images
      { test: /\.(webp|png|jpg|svg|eot|ttf|woff|woff2)$/, use: 'url-loader' }
    ]
  }

  const resolve = {
    alias: {}
  }

  const plugins = [

  ]

  const devtool = 'source-map'

  const devServer = {
    publicPath: '/',
    contentBase: tmp,
    hot: true,
    host: '0.0.0.0',
    port: '8080'
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


/// Main

function main () {

  // Webpack
  const compiler = webpack(makeOptions())
  compiler.outputFileSystem = new MemoryFS()

  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
      return
    }

    console.log(stats.toString({
      chunks: false,
      colors: true
    }))
  })

  // Jest framework
  // jest.run([ '--watch' ])
}

console.log(process.execPath)
// const jest = spawn('jest', [ '--config=.jestrc', '--watch' ])
// const jest = exec('yarn jest -- --config jest.config.js --watch', (err, stdout, stderr) => {
//   if(err) {
//     console.error(err)
//     return
//   }

//   console.log(stdout)
// })

// jest.stdout.on('data', data => {
//   //jest.stdin.write(data)
//   console.log(data.toString())
// })

// jest.stderr.on('data', data => {
//   console.log(`jest stderr: ${data}`)
// })

// jest.on('close', code => {
//   if (code !== 0) {
//     console.log(`ps process exited with code ${code}`)
//   }
//   jest.stdin.end()
// })

main()
