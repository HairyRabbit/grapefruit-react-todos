// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow

import React    from 'react'
import ReactDOM from 'react-dom'
import Root     from './index'


/// Main

function main(): void {
  const node = document.getElementById('app')
  if (process.env.NODE_ENV === 'development') {
    const { AppContainer } = require('react-hot-loader')

    ReactDOM.render((
      <AppContainer>
        <Root />
      </AppContainer>
    ), node)
  } else {
    ReactDOM.render(<Root />, node)
  }
}



/// Bootstrapper

main()



/// Hot module replacment

if (module.hot) {
  module.hot.accept('./index', main)
}
