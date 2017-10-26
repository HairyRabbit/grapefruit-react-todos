// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../core/todos'
import type { Model } from '../../core/todos'
import TextField from '../../components/TextField'
import CheckBox from '../../components/CheckBox'
import Confirm from '../../components/Confirm'
import Header from '../Header'
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

export class Main extends Component<Props, State> {
  constructor (props) {
    super(props)

    this.state = {
      confirmOpened: false
    }

    this.openConfirm = this.openConfirm.bind(this)
    this.closeConfirm = this.closeConfirm.bind(this)
    this.confirmOKPressHandle = this.confirmOKPressHandle.bind(this)
  }

  openConfirm () {
    this.setState({
      confirmOpened: true
    })
  }

  closeConfirm () {
    this.setState({
      confirmOpened: false
    })
  }

  confirmOKPressHandle () {
    this.props.deleteTodos(
      this.props.todos.filter(el => el.completed)
    )()

    this.closeConfirm()
  }

//   shouldComponentUpdate (nextProps, nextState) {
//     return false
//   }

  render () {
    const {
      todos,
      createTodo,
      updateTodos,
      deleteTodos,
      updateTodoByText,
      updateTodoByCompleted,
      deleteTodo
    } = this.props

    const completedTodos: Array<Todo> = todos.filter(el => el.completed)
    const unCompletedTodos: Array<Todo> = todos.filter(el => !el.completed)
    const allChecked: boolean = todos.length && todos.every(el => el.completed)

    return (
      <div className={style.container}>
        <h1 className={style.header}>todos</h1>

        <div className={style.main}>
        <Header />

        {/* Body: todos list. */}
        {todos.length ? todos.map(function (todo, idx) {
          // const TodoComponent = Todo(todo)
          return (
            <div key={idx}>
              <Todo todo={todo} />
            </div>
          )
        }): null}

      {/* Footer: control buttons. */}
      {todos.length > 0 ? (
        <div>
          <div>
            {unCompletedTodos.length === 1
              ? String(unCompletedTodos.length) + ' item'
            : String(unCompletedTodos.length) + ' items'} left
          </div>
          <div>
            <button type="button" onClick={this.openConfirm}>
              Clear completed
            </button>
          </div>
        </div>
      ): null}

      {/* Popup confirm, when clear completeds. */}
      {this.state.confirmOpened ? (
        <Confirm opened={this.state.confirmOpened}
                 title="test"
                 content="content123"
                 onOKPress={this.confirmOKPressHandle}
                 onCanclePress={this.closeConfirm} />
      ) : null}
      </div>
      </div>
    )
  }
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
    deleteTodos: todos => () => dispatch(actions.deleteTodos(todos)),
    updateTodoByText: todo => text => dispatch(actions.updateTodo({
      ...todo,
      text
    })),
    updateTodoByCompleted: todo => dispatch(actions.updateTodo({
      ...todo,
      completed: !todo.completed
    })),
    deleteTodo: todo => dispatch(actions.deleteTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
