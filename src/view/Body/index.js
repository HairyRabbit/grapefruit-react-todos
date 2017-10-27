// @flow

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../core/todos'
import type { Model } from '../../core/todos'
import TextField from '../../components/TextField'
import CheckBox from '../../components/CheckBox'
import Confirm from '../../components/Confirm'
import Header from '../Header'
import Footer from '../Footer'
import Todo from '../Todo'
import style from './style.css'

type Props = {
  todos: Model,
  createTodo: Function,
  updateTodos: Function,
  deleteTodos: Function,
  updateTodoByText: Function,
  updateTodoByCompleted: Function,
  deleteTodo: Function
}

type State = {
  confirmOpened: boolean
}

export function Body (props: Props): React.Node {
  const {
    todos
  } = props

  if(!todos.length) return null

  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.id}>
            <Todo todo={todo} />
          </div>
        )
      })}

      <Footer />
      </div>
  )
}

function mapStateToProps (state, ownProps) {
  const todos =  state.todos.todos
  const len = todos.length
  switch (state.modules.router.location.pathname) {
  case '/':
    return {
      todos
    }
  case '/active':
    return {
      todos: todos.filter(todo => !todo.completed)
    }
  case '/completed':
    return {
      todos: todos.filter(todo => todo.completed)
    }
  }
}

export default connect(mapStateToProps, null)(Body)
