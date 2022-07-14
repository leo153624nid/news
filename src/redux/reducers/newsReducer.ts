import { createReducer } from '@reduxjs/toolkit'
import { GET_LATEST_NEWS, SET_LATEST_NEWS } from '../constants'
import { ActionsType } from '../actions/actionCreator'

const initialState = {
    latestNews: [] as Object[],
}

type StateType = typeof initialState

const newsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(GET_LATEST_NEWS, (state: StateType) => ({
            ...state,
        }))
        .addCase(SET_LATEST_NEWS, (state: StateType, action: ActionsType) => ({
            ...state,
            latestNews: [...state.latestNews, ...action.payload],
        }))
        .addDefaultCase((state: StateType) => state)
})

export default newsReducer
