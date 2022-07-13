import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers/index'
import logger from 'redux-logger'

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
