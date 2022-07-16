import { GET_LATEST_NEWS, SET_LATEST_NEWS } from '../constants'

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type ActionsType = ReturnType<InferValueTypes<typeof actions>>

export const actions = {
    setLatestNews: (payload: Object[]) =>
        ({
            type: SET_LATEST_NEWS,
            payload,
        } as const),
    getLatestNews: () => ({ type: GET_LATEST_NEWS } as const),
}
