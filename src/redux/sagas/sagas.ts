import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_NEWS } from '../constants'
import { getNews, getPopularNews } from '../../api/newsAPI'
import { actions } from '../actions/actionCreator'
import { NewsType } from '../../types/types'

export function* handleLatestNews() {
    const data = (yield call(getNews, 'typescript')) as NewsType[]
    yield put(actions.setLatestNews(data))
}

export function* handlePopularNews() {
    const data = (yield call(getPopularNews)) as NewsType[]
    yield put(actions.setPopularNews(data))
}

export function* workerSagaNews() {
    yield call(handleLatestNews)
    yield call(handlePopularNews)
}

export function* watchClickSaga() {
    yield takeEvery(GET_NEWS, workerSagaNews)
}

export default function* rootSaga() {
    yield watchClickSaga()
}
