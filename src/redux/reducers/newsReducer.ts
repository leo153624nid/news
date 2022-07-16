import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { GET_NEWS, SET_LATEST_NEWS, SET_POPULAR_NEWS } from '../constants'
import { NewsState, NewsType } from '../../types/types'

const initialState: NewsState = {
    latestNews: [],
    popularNews: [],
}

const newsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(GET_NEWS, (state) => ({
            ...state,
        }))
        .addCase(
            SET_LATEST_NEWS,
            (state, action: PayloadAction<NewsType[]>) => ({
                ...state,
                latestNews: [...state.latestNews, ...action.payload],
            })
        )
        .addCase(
            SET_POPULAR_NEWS,
            (state, action: PayloadAction<NewsType[]>) => ({
                ...state,
                popularNews: [...state.popularNews, ...action.payload],
            })
        )
        .addDefaultCase((state) => state)
})

export default newsReducer
