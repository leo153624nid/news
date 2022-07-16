import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { GET_LATEST_NEWS, SET_LATEST_NEWS } from '../constants'

export type NewsType = {
    author: string
    comment_text: string | null
    created_at: string
    created_at_i: number
    num_comments: number
    objectID: string
    parent_id: string | null
    points: number
    story_id: string | null
    story_text: string | null
    story_title: string | null
    story_url: string | null
    title: string
    url: string
    _highlightResult: object | null
    _tags: object[] | null
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
