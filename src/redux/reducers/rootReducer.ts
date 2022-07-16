/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { combineReducers } from '@reduxjs/toolkit'
import errorNewsReducer from './errorNewsReducer'
import newsReducer from './newsReducer'
import loadingDataReducer from './loadingDataReducer'

const rootReducer = combineReducers({
    news: newsReducer,
    errors: errorNewsReducer,
    loader: loadingDataReducer,
})

export default rootReducer
