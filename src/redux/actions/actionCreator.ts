import { GET_LATEST_NEWS, SET_LATEST_NEWS } from '../constants'

type AType<T> = T extends { [key: string]: infer U } ? U : any
export type ActionsType = ReturnType<AType<typeof actions>>

export const actions = {
    getLatestNews: () => ({ type: GET_LATEST_NEWS } as const),
    setLatestNews: (payload: Object[]) =>
        ({
            type: SET_LATEST_NEWS,
            payload,
        } as const),
}

// export const getLatestNews = () => ({ type: GET_LATEST_NEWS } as const)

// export const setLatestNews = (payload: Array<Object>) =>
//     ({
//         type: SET_LATEST_NEWS,
//         payload,
//     } as const)
