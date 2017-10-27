// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow


import React    from 'react'
import { Switch, Link } from 'react-router-dom'
// import Route    from 'rabbit-react-dom'
import Route    from 'rabbit-react-router-async'
import NoMatch from './NoMatch'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import './style.css'

function App(): React.Element<*> {
  return (
    <div>
      <Switch>
        <Route path="/(active|completed)?" exact component={import(/* webpackChunkName: "main" */'./main')} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}

export default App
