/**
 * todos actions
 *
 * @flow
 */

import type { Todo } from './types'
import ActionType from './types'
import type {
  CreateTodoAction,
  UpdateTodoAction,
  DeleteTodoAction,
  GetTodosAction,
  UpdateTodosAction,
  DeleteTodosAction
} from './types'

import store from '../../services/datas'

function createTodo (value: string): CreateTodoAction {
  return function(dispatch) {
    store.create('todo', createTodoByText(value))
      .then(record => {
        return dispatch({
          type: ActionType.CREATE_TODO,
          payload: record.toJSON()
        })
      })
  }
}

function createTodoByText (text: string): Todo {
  const id = String(Date.now())
  return {
    id,
    text,
    completed: false
  }
}

function updateTodo (todo: Todo): UpdateTodoAction {
  return {
    type: ActionType.UPDATE_TODO,
    payload: todo
  }
}

function deleteTodo (todo: Todo): DeleteTodoAction {
  return {
    type: ActionType.DELETE_TODO,
    payload: todo
  }
}

function getTodos (query?: {
  completed: boolean
}): GetTodosAction {
  return {
    type: ActionType.GET_TODOS,
    payload: query
  }
}

function updateTodos (todos): UpdateTodosAction {
  return {
    type: ActionType.UPDATE_TODOS,
    payload: todos
  }
}

function deleteTodos (todos): DeleteTodosAction {
  return {
    type: ActionType.DELETE_TODOS,
    payload: todos
  }
}

export default {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodos,
  updateTodos,
  deleteTodos
}
