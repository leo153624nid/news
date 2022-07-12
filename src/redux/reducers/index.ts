import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    userData: userDataReducer,
})

export default rootReducer
