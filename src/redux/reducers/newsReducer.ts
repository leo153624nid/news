import { createReducer } from '@reduxjs/toolkit'
import { GET_POPULAR_NEWS } from '../constants'

const initialState = {
    userId: null,
    login: null,
    email: null,
    userName: null,
    userCars: null,
    carusel: null,
}

const newsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(GET_POPULAR_NEWS, (state, action) => ({
            ...action.userData,
            carusel: [
                action.userData.userCars[0],
                action.userData.userCars[1],
                action.userData.userCars[2],
            ],
        }))
        .addDefaultCase((state) => state)
})

export default newsReducer
