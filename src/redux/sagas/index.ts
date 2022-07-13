import { takeEvery } from 'redux-saga/effects'
import { GET_POPULAR_NEWS } from '../constants'
import { getLatestNews } from '../../api'

export function* workerSaga() {
    const data = yield getLatestNews()
    console.log(data)
}

export function* watchClickSaga() {
    yield takeEvery(GET_POPULAR_NEWS, workerSaga)
}

export default function* rootSaga() {
    yield watchClickSaga()
}
