import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    userId: null,
    login: null,
    email: null,
    userName: null,
    userCars: null,
    carusel: null,
}

const userDataReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_USER_DATA, (state, action) => ({
            ...action.userData,
            carusel: [
                action.userData.userCars[0],
                action.userData.userCars[1],
                action.userData.userCars[2],
            ],
        }))
        .addDefaultCase((state) => state)
})

export default userDataReducer
