/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { SET_LOADING_DATA } from '../constants'
import { LoadingState } from '../../types/types'

const initialState: LoadingState = {
    isLoading: false,
}

const loadingDataReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_LOADING_DATA, (state, action: PayloadAction<boolean>) => ({
            ...state,
            isLoading: action.payload,
        }))
        .addDefaultCase((state) => state)
})

export default loadingDataReducer
