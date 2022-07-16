/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
    GET_LATEST_NEWS,
    GET_POPULAR_NEWS,
    SET_LATEST_NEWS,
    SET_POPULAR_NEWS,
    SET_POPULAR_NEWS_ERROR,
    SET_LATEST_NEWS_ERROR,
} from '../constants'
import type { NewsType } from '../../types/types'

// type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
// export type ActionsType = ReturnType<InferValueTypes<typeof actions>>

const actions = {
    getLatestNews: () => ({ type: GET_LATEST_NEWS }),
    getPopularNews: () => ({ type: GET_POPULAR_NEWS }),
    setLatestNews: (payload: NewsType[]) => ({
        type: SET_LATEST_NEWS,
        payload,
    }),
    setPopularNews: (payload: NewsType[]) => ({
        type: SET_POPULAR_NEWS,
        payload,
    }),
    setLatestNewsError: (payload: string) => ({
        type: SET_LATEST_NEWS_ERROR,
        payload,
    }),
    setPopularNewsError: (payload: string) => ({
        type: SET_POPULAR_NEWS_ERROR,
        payload,
    }),
}

export default actions
