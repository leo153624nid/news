import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { GET_LATEST_NEWS, SET_LATEST_NEWS } from '../constants'

export type NewsType = {
    id: string
    story: string
}
type NewsState = { latestNews: NewsType[] }

const initialState: NewsState = {
    latestNews: [],
}

const newsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(GET_LATEST_NEWS, (state) => ({
            ...state,
        }))
        .addCase(
            SET_LATEST_NEWS,
            (state, action: PayloadAction<NewsType[]>) => ({
                ...state,
                latestNews: [...state.latestNews, ...action.payload],
            })
        )
        .addDefaultCase((state) => state)
})

export default newsReducer
