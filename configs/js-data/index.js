/**
 * js-data
 */

import { DataStore } from 'js-data'
import { HttpAdapter } from 'js-data-http'
import { LocalStorageAdapter } from 'js-data-localstorage'

const store = new DataStore()
const adapter = new LocalStorageAdapter()

store.registerAdapter('localstorage', adapter, { 'default': true })

export default store
