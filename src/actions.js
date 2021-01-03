import * as actions from './actionTypes'

export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            desciption: description
        }
    }
}

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id,
    }
})