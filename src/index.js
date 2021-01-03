import store from './store'
import * as actions from './actionTypes'

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        desciption: "Bug1"
    }
})

console.log(store)
console.log(store.getState)