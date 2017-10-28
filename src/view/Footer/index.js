// @flow

import React, { PureComponent } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../core/todos'
import Confirm from '../../components/Confirm'
import ListView from '../../components/ListView'
import style from './style.css'

type Props = {
  todos: *,
  deleteTodos: Function
}

type State = {
  confirmOpened: boolean
}

export class Footer extends PureComponent<Props, State> {
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

  render () {
    const {
      todos,
      deleteTodos
    } = this.props

    const unCompletedTodos = todos.filter(el => !el.completed)

    return (
      <div className={style.container}>
        <div className={style.left}>
          {unCompletedTodos.length === 1
            ? String(unCompletedTodos.length) + ' item'
          : String(unCompletedTodos.length) + ' items'} left
        </div>

        <nav className={style.middle}>
          <ul className={style.nav}>
            <li key="nav-root">
              <NavLink to="/" exact activeClassName={style.active} className={style.menu}>All</NavLink>
            </li>
            <li key="nav-active">
              <NavLink to="/active" exact activeClassName={style.active} className={style.menu}>Active</NavLink>
            </li>
            <li key="nav-completed">
              <NavLink to="/completed" exact activeClassName={style.active} className={style.menu}>Completed</NavLink>
            </li>
          </ul>
        </nav>

        <div className={style.right}>
          {unCompletedTodos.length !== todos.length ? (
            <button type="button"
                    onClick={this.openConfirm}
                    className={style.button}>
              Clear completed
            </button>
          ): null}
      </div>

      {/* Confirm */}
      {this.state.confirmOpened ? (
        <Confirm opened={this.state.confirmOpened}
                 title="test"
                 content="content123"
                 onOKPress={this.confirmOKPressHandle}
                 onCanclePress={this.closeConfirm} />
      ) : null}
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
    deleteTodos: todos => () => dispatch(actions.deleteTodos(todos))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer))
