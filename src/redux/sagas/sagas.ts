import { takeEvery, put, call, all, fork } from 'redux-saga/effects'
import { GET_LATEST_NEWS, GET_POPULAR_NEWS } from '../constants'
import { getNews, getPopularNews } from '../../api/newsAPI'
import actions from '../actions/actionCreator'
import { NewsType } from '../../types/types'

export function* handleLatestNews() {
    try {
        const data = (yield call(getNews, 'typescript')) as NewsType[]
        yield put(actions.setLatestNews(data))
    } catch (error) {
        yield put(actions.setLatestNewsError('Error downloading Latest News'))
    }
}

export function* handlePopularNews() {
    try {
        const data = (yield call(getPopularNews)) as NewsType[]
        yield put(actions.setPopularNews(data))
    } catch (error) {
        yield put(actions.setPopularNewsError('Error downloading Popular News'))
    }
}

export function* watchLatestNews() {
    yield takeEvery(GET_LATEST_NEWS, handleLatestNews)
}

export function* watchPopularNews() {
    yield takeEvery(GET_POPULAR_NEWS, handlePopularNews)
}
// export function* workerSagaNews() {
//     yield spawn(handleLatestNews)
//     yield spawn(handlePopularNews)
// }

// export function* watchClickSaga() {
//     yield takeEvery(GET_NEWS, workerSagaNews)
// }

export default function* rootSaga() {
    yield all([fork(watchLatestNews), fork(watchPopularNews)])
}
