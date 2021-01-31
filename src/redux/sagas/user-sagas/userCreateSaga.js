import { call, put, spawn, takeLatest } from 'redux-saga/effects'

//actions
import * as types from '../../actions/actionTypes'
import { userCreateFail, userCreateSuccess } from '../../actions'

//API
import { apiPost } from '../../../api'


const apiCall = (data) => (
  apiPost('users',data).catch(err => console.log(err))
)

const sagaRequest = function* sagaRequest(action) {
  const {payload} = action;

  try {
   const response = yield call(apiCall,payload);
    yield put(userCreateSuccess(response.data.user));
  } catch (e) {
    yield put(userCreateFail())
  }
}

const userCreateRequest = function* userCreateRequest() {
  yield takeLatest(types.USER_CREATE_REQUEST, sagaRequest)
}

const userCreateSaga = function* userCreateSaga() {
  yield spawn(userCreateRequest)
}

export default userCreateSaga