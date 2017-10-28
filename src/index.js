// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import React               from 'react'
import { Provider }        from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter }   from 'react-router-dom'
import history             from 'config/history'
import App                 from './view'
import store               from './core'


function Root(): React.Element<*> {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
