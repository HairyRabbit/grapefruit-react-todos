// @flow

import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../core/todos'
import style from './style.css'
import TextField from '../../components/TextField'
import CheckBox from '../../components/CheckBox'
import ListView from '../../components/ListView'

type Props = {
  todos: *,
  updateTodos: Function,
  createTodo: Function
}

export function Header (props: Props): React.Node {
  const {
    todos,
    updateTodos,
    createTodo,
  } = props

  const allChecked = todos.length && todos.every(el => el.completed)
  const onAllCheckBoxPress = updateTodos(
    todos.map((todo) => {
      return {
        ...todo,
        completed: !allChecked
      }
    })
  )

  const allCheckBoxView = todos.length ? (
    <CheckBox checked={allChecked}
              onChange={onAllCheckBoxPress} />
  ) : null

  return (
    <ListView>
        {allCheckBoxView}
        <TextField onKeyUp={createTodo}
                   autoFocus
                   placeholder="What need to be done?" />
        {null}
      </ListView>
  )
}


function mapStateToProps (state) {
  return {
    todos: state.todos.todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createTodo: text => dispatch(actions.createTodo(text)),
    updateTodos: todos => () => dispatch(actions.updateTodos(todos)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
