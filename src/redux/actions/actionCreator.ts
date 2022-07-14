import { GET_LATEST_NEWS, SET_LATEST_NEWS } from '../constants'

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type ActionsType = ReturnType<InferValueTypes<typeof actions>>

export const actions = {
    getLatestNews: () => ({ type: GET_LATEST_NEWS } as const),
    setLatestNews: (payload: any) =>
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
