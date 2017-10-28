// @flow

import React, { Component } from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../core/todos'
import type { Model } from '../../core/todos'
import TextField from '../../components/TextField'
import CheckBox from '../../components/CheckBox'
import Confirm from '../../components/Confirm'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import Todo from '../Todo'
import style from './style.css'

// type Props = {
//   todos: Model,
//   createTodo: Function,
//   updateTodos: Function,
//   deleteTodos: Function,
//   updateTodoByText: Function,
//   updateTodoByCompleted: Function,
//   deleteTodo: Function,
//   match: *
// }

// type State = {
//   confirmOpened: boolean
// }

// export class Main extends Component<Props, State> {
//   constructor (props) {
//     super(props)

//     this.state = {
//       confirmOpened: false
//     }

//     this.openConfirm = this.openConfirm.bind(this)
//     this.closeConfirm = this.closeConfirm.bind(this)
//     this.confirmOKPressHandle = this.confirmOKPressHandle.bind(this)
//   }

//   openConfirm () {
//     this.setState({
//       confirmOpened: true
//     })
//   }

//   closeConfirm () {
//     this.setState({
//       confirmOpened: false
//     })
//   }

//   confirmOKPressHandle () {
//     this.props.deleteTodos(
//       this.props.todos.filter(el => el.completed)
//     )()

//     this.closeConfirm()
//   }

//   render () {
//     const {
//       todos,
//       match
//     } = this.props

//     console.log(match)

//     return (
//       <div className={style.container}>
//         <h1 className={style.header}>todos</h1>

//         <div className={style.main}>
//           <Header />
//           <Body />
//           <Route path="/active" component={Body} />
//         </div>
//       </div>
//     )
//   }
// }

// function mapStateToProps (state) {
//   return {
//     todos: state.todos.todos
//   }
// }

// function mapDispatchToProps (dispatch) {
//   return {
//     createTodo: text => dispatch(actions.createTodo(text)),
//     updateTodos: todos => () => dispatch(actions.updateTodos(todos)),
//     deleteTodos: todos => () => dispatch(actions.deleteTodos(todos)),
//     updateTodoByText: todo => text => dispatch(actions.updateTodo({
//       ...todo,
//       text
//     })),
//     updateTodoByCompleted: todo => dispatch(actions.updateTodo({
//       ...todo,
//       completed: !todo.completed
//     })),
//     deleteTodo: todo => dispatch(actions.deleteTodo(todo))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Main)

type Props = {
  match: any
}

export default function Main (props: Props) {
  return (
    <div className={style.container}>
      <h1 className={style.header}>todos</h1>
      <div className={style.main}>
        <Header />
        <Body />
      </div>
    </div>
  )
}
