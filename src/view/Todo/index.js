// @flow

import React, { Component } from 'react'
import TextField from '../../components/TextField'
import CheckBox from '../../components/CheckBox'
import ListView from '../../components/ListView'
import { connect } from 'react-redux'
import { actions } from '../../core/todos'
import style from './style.css'

type Props = {
  todo: any,
  updateTodoByText: Function,
  updateTodoByCompleted: Function,
  deleteTodo: Function
}

type State = {
  isEdit: boolean
}

export class Todo extends Component<Props, State> {
  constructor() {
    super()

    this.state = {
      isEdit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this)
    this.afterUpdateHandle = this.afterUpdateHandle.bind(this)
    this.blurHandle = this.blurHandle.bind(this)
  }

  afterUpdateHandle(value) {
    this.props.updateTodoByText(this.props.todo)(value)
    this.toggleEdit()
  }

  toggleEdit() {
    this.setState(state => ({
      isEdit: !state.isEdit
    }))
  }

  blurHandle(evt) {
    this.afterUpdateHandle(evt.target.value)
  }

  render() {
    const {
      todo,
      updateTodoByCompleted,
      deleteTodo
    } = this.props

    return (
      <ListView isActive={this.state.isEdit}>
        <CheckBox checked={todo.completed} onChange={updateTodoByCompleted(todo)} />
        {this.state.isEdit ? (
          <TextField value={todo.text}
                     autoFocus
                     onKeyUp={this.afterUpdateHandle}
                     onBlur={this.blurHandle} />
        ) : (
          <div className={[style.container, todo.completed ? style.completed : ''].join(' ')}
               onClick={this.toggleEdit}>
            {todo.text}
          </div>
        )}
        <div onClick={deleteTodo(todo)}>

      </div>
        </ListView>
    )
  }
}

function mapStateToProps (todo) {
  return function (state) {
    return {
      todo: state.todos.todos.find(el => el === todo)
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateTodoByText: todo => text => dispatch(actions.updateTodo({
      ...todo,
      text
    })),
    updateTodoByCompleted: todo => () => dispatch(actions.updateTodo({
      ...todo,
      completed: !todo.completed
    })),
    deleteTodo: todo => () => dispatch(actions.deleteTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(Todo)
