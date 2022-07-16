/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR } from '../constants'
import { NewsErrorState } from '../../types/types'

const initialState: NewsErrorState = {
    latestNewsError: '',
    popularNewsError: '',
}

const newsErrorReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(
            SET_LATEST_NEWS_ERROR,
            (state, action: PayloadAction<string>) => ({
                ...state,
                latestNewsError: action.payload,
            })
        )
        .addCase(
            SET_POPULAR_NEWS_ERROR,
            (state, action: PayloadAction<string>) => ({
                ...state,
                popularNewsError: action.payload,
            })
        )
        .addDefaultCase((state) => state)
})

export default newsErrorReducer
