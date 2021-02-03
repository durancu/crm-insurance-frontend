import { call, put, spawn, takeLatest } from 'redux-saga/effects'

//actions
import * as types from '../../actions/actionTypes'
import { userLoadFail, userLoadSuccess } from '../../actions'

//API
import { apiGet } from '../../../global/apiMethods'

const apiCall = () => (
  apiGet('users').catch(err => console.log(err))
)

const sagaRequest = function* sagaRequest() {
  try {
    const response = yield call(apiCall);
    yield put(userLoadSuccess(response.data));
  } catch (e) {
    yield put(userLoadFail())
  }
}

const userGetRequest = function* userGetRequest() {
  yield takeLatest(types.USER_LOAD_REQUEST, sagaRequest)
}

const userLoadListSaga = function* userLoadListSaga() {
  yield spawn(userGetRequest)
}

export default userLoadListSaga