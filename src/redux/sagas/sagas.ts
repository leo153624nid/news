import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_LATEST_NEWS } from '../constants'
import { getLatestNews } from '../../api/newsAPI'
import { actions } from '../actions/actionCreator'
import { NewsType } from '../../types/types'

export function* workerSaga() {
    const data = (yield call(getLatestNews, 'react')) as NewsType[]
    console.log(data)
    yield put(actions.setLatestNews(data))
}

export function* watchClickSaga() {
    yield takeEvery(GET_LATEST_NEWS, workerSaga)
}

export default function* rootSaga() {
    yield watchClickSaga()
}
