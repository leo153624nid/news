/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { combineReducers } from '@reduxjs/toolkit'
import errorNewsReducer from './errorNewsReducer'
import newsReducer from './newsReducer'

const rootReducer = combineReducers({
    news: newsReducer,
    errors: errorNewsReducer,
})

export default rootReducer
