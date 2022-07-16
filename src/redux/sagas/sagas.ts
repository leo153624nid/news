import { takeEvery, put } from 'redux-saga/effects'
import { GET_LATEST_NEWS } from '../constants'
import { getLatestNews } from '../../api/newsAPI'
import { actions } from '../actions/actionCreator'
import { NewsType } from '../reducers/newsReducer'

export function* workerSaga() {
    const data = (yield getLatestNews()) as NewsType[]
    console.log(data)
    yield put(actions.setLatestNews(data))
}

export function* watchClickSaga() {
    yield takeEvery(GET_LATEST_NEWS, workerSaga)
}

export default function* rootSaga() {
    yield watchClickSaga()
}
