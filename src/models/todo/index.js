import { Schema} from 'js-data'

export default {
  name: 'todo',
  endpoint: 'todos',
  schema: new Schema({
    type: 'object',
    properties: {
      id: {
        type: 'string'
      },
      text: {
        type: 'string'
      },
      completed: {
        type: 'boolean'
      }
    }
  })
}
