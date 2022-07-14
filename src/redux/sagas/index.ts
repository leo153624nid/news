import { takeEvery, put } from 'redux-saga/effects'
import { GET_LATEST_NEWS } from '../constants'
import { getLatestNews } from '../../api'
import { actions } from '../actions/actionCreator'

export function* workerSaga(): any {
    //Доделать без any !!!!!!!
    const data = yield getLatestNews()
    console.log(data)
    yield put(actions.setLatestNews(data.hits))
}

export function* watchClickSaga() {
    yield takeEvery(GET_LATEST_NEWS, workerSaga)
}

export default function* rootSaga() {
    yield watchClickSaga()
}
