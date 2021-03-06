/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from './sagas/sagas'
import rootReducer from './reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false })
            .concat(logger)
            .concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
