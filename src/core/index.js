// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * core.js
 *
 * Configure redux store.
 */

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import {
  routerReducer as router ,
  routerMiddleware
} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
// import createHistory from 'history/createBrowserHistory'
import history from 'config/history'
import todosUpdate, { initModel as todosInitModel } from './todos'

function foldModule(modkey) {
  return function(acc, curr) {
    const [key, module] = curr
    return {
        ...acc,
      [key]: module[modkey]
    }
  }
}

// const context = require.context('./', true, /index\.js$/)
// const modules = context.keys().map(path => {
//   // console.log(path)
//   const regex = /\.\/([\w|-]+)\/index\.js$/
//   const name = path.match(regex)[1]
//   return [name, context(path)]
// })

const update = combineReducers({
  //...modules.reduce(foldModule('default'), {}),
  todos: todosUpdate,
  models: combineReducers({
    todo: todosUpdate
  }),
  modules: combineReducers({
    router
  })
})

const init = {
  //...modules.reduce(foldModule('initModel'), {})
  todos: todosInitModel
}

const middlewares = applyMiddleware(thunkMiddleware, routerMiddleware(history))

const enhancer = process.env.NODE_ENV !== 'production'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

const store = createStore(update, init, enhancer(middlewares))

export default store

store.subscribe(function() {
  console.log(store.getState())
})
