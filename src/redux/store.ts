import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    userData: userDataReducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
