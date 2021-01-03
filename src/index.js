import store from './store'
import { bugAdded } from './actions'

store.dispatch(bugAdded("bug1"))

console.log(store)
console.log(store.getState)