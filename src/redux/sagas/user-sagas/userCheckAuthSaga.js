import { /*call,*/ put, takeLatest, spawn, } from 'redux-saga/effects';
import * as types from '../../actions/actionTypes';
import { userCheckAuthFail, userCheckAuthSuccess } from '../../actions'
//import { apiPost } from '../../../global/apiMethods'
//import { setTokenAuth } from '../../../global/sessionStore'

/* const apiCall = (data) => (
  apiPost('auth/login', data).catch(err => console.log(err))
) */

const sagaRequest = function* sagaRequest(action) {
  //const { payload } = action;
  try {
   // const response = yield call(apiCall, payload)
  //  setTokenAuth(response.data.access_token)
    yield put(userCheckAuthSuccess())
  } catch (e) {
    yield put(userCheckAuthFail())
  }
}

const userCheckAuthRequest = function* userCheckAuthRequest() {
  yield takeLatest(types.USER_CHECK_AUTH_REQUEST, sagaRequest)
}

const userCheckAuthSaga = function* userCheckAuthSaga() {
  yield spawn(userCheckAuthRequest)
}

export default userCheckAuthSaga;