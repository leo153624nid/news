import { createReducer } from '@reduxjs/toolkit'
import { GET_POPULAR_NEWS } from '../constants'

const initialState = {
    news: null,
}

const newsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(GET_POPULAR_NEWS, (state, action) => ({
            state,
        }))
        .addDefaultCase((state) => state)
})

export default newsReducer
