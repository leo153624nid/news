import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { SET_LATEST_NEWS, SET_POPULAR_NEWS } from '../constants'
import { NewsState, NewsType } from '../../types/types'

const initialState: NewsState = {
    latestNews: [],
    popularNews: [],
}

const newsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(
            SET_LATEST_NEWS,
            (state, action: PayloadAction<NewsType[]>) => ({
                ...state,
                latestNews: [...action.payload],
            })
        )
        .addCase(
            SET_POPULAR_NEWS,
            (state, action: PayloadAction<NewsType[]>) => ({
                ...state,
                popularNews: [...action.payload],
            })
        )
        .addDefaultCase((state) => state)
})

export default newsReducer
