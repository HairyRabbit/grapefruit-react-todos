/**
 * todos update
 *
 * @flow
 */

import type { Todo } from './types'
import type { Model, Action } from './types'
import ActionType from './types'

/// Init

export const initModel: Model = {
  todos: []
}

/// Update

export default function todos (
  model: Model = initModel,
  action: Action
): Model {
  switch (action.type) {
  case ActionType.CREATE_TODO: {
    return {
      ...model,
      todos: [
        ...model.todos,
        action.payload
      ]
    }
  }
  case ActionType.UPDATE_TODO: {
    const todo = action.payload
    return {
      ...model,
      todos: model.todos.map(el => {
        if(el.id === todo.id) {
          return todo
        }
        return el
      })
    }
  }
  case ActionType.UPDATE_TODOS: {
    const todos = action.payload
    return {
      ...model,
      todos: todos
    }
  }
  case ActionType.DELETE_TODO: {
    const todo = action.payload
    return {
      ...model,
      todos: model.todos.filter(el => {
        return el.id !== todo.id
      })
    }
  }
  case ActionType.DELETE_TODOS: {
    const todoIds = action.payload.map(todo => todo.id)
    return {
      ...model,
      todos: model.todos.filter(el => {
        return !~todoIds.indexOf(el.id)
      })
    }
  }
  default: {
    return model
  }
  }
}

function createTodoByText (text: string): Todo {
  const id = Date.now()
  return {
    id,
    text,
    completed: false
  }
}
