import DataStore from 'config/js-data'
import TodoModel from '../../models/todo'

DataStore.defineMapper('todo', TodoModel)

export default DataStore
