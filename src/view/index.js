// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow


import React    from 'react'
import { Switch, Link } from 'react-router-dom'
import Route    from 'rabbit-react-router-async'
import NoMatch from './NoMatch'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import './style.css'

function App(): React.Element<*> {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={import(/* webpackChunkName: "main" */'./main')} />
        {/* Fallback route. */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}

// <Route path="/" component={import(/* webpackChunkName: "blog" */'view/blog')} />
// <Route exact path="/" component={import(/* webpackChunkName: "welcome" */'view/welcome')} />

export default App
