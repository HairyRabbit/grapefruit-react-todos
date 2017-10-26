// -*- mode: js -*-
// -*- coding: utf-8 -*-

/**
 * Postcss config file
 */

module.exports = (ctx) => {
  return {
    plugins: [
      // require('stylelint')({
      //   ignorePath: ["node_modules", "reboot.css"]
      // }),
      //require('autoprefixer')(),
      //require('postcss-custom-properties')(),
      //require('postcss-modules-values-replace'),
      require('postcss-cssnext')(),
      // require('postcss-css-variables'),
      // require('postcss-calc'),
      require('postcss-short')(),
      // require('postcss-nesting')(),
      // require('postcss-color-function')(),
      require('postcss-easings')(),
      require('postcss-strip-inline-comments')()
    ],
    syntax: require('postcss-scss')
  }
}
