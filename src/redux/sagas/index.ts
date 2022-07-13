import { takeEvery } from 'redux-saga/effects'
import { GET_POPULAR_NEWS } from '../constants'

export function* workerSaga() {
    console.log('ok')
}

export function* watchClickSaga() {
    yield takeEvery(GET_POPULAR_NEWS, workerSaga)
}

export default function* rootSaga() {
    yield watchClickSaga()
}
