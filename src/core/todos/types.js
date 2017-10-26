/**
 * todo types
 *
 * @flow
 */


/// Model

export type Todo = {
  id: string,
  text: string,
  completed: boolean
}

export type Model = {
  todos: Array<Todo>
}

/// ActionTypes

const CREATE_TODO:  'CREATE_TODO'  = 'CREATE_TODO'
const UPDATE_TODO:  'UPDATE_TODO'  = 'UPDATE_TODO'
const DELETE_TODO:  'DELETE_TODO'  = 'DELETE_TODO'
const GET_TODOS:    'GET_TODOS'    = 'GET_TODOS'
const UPDATE_TODOS: 'UPDATE_TODOS' = 'UPDATE_TODOS'
const DELETE_TODOS: 'DELETE_TODOS' = 'DELETE_TODOS'

export default {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  GET_TODOS,
  UPDATE_TODOS,
  DELETE_TODOS
}

/// Actions

export type CreateTodoAction = {
  type: typeof CREATE_TODO,
  payload: string
}

export type UpdateTodoAction = {
  type: typeof UPDATE_TODO,
  payload: Todo
}

export type DeleteTodoAction = {
  type: typeof DELETE_TODO,
  payload: Todo
}

export type GetTodosAction = {
  type: typeof GET_TODOS,
  payload: ?{
    completed: boolean
  }
}

export type UpdateTodosAction = {
  type: typeof UPDATE_TODOS,
  payload: Array<Todo>
}

export type DeleteTodosAction = {
  type: typeof DELETE_TODOS,
  payload: Array<Todo>
}

export type ActionType =
  | CreateTodoAction
  | UpdateTodoAction
  | DeleteTodoAction
  | GetTodosAction
  | UpdateTodosAction
  | DeleteTodosAction
