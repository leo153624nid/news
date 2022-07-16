import {
    GET_NEWS,
    SET_LATEST_NEWS,
    SET_POPULAR_NEWS,
    SET_POPULAR_NEWS_ERROR,
    SET_LATEST_NEWS_ERROR,
} from '../constants'
import type { NewsType } from '../../types/types'

// type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
// export type ActionsType = ReturnType<InferValueTypes<typeof actions>>

export const actions = {
    getNews: () => ({ type: GET_NEWS } as const),
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
