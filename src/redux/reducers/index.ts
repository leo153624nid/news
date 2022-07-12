import { combineReducers } from '@reduxjs/toolkit'

const test = (state = {}) => {
    return state
}

const rootReducer = combineReducers({
    userData: test,
})

export default rootReducer
