import { call, put, spawn, takeLatest } from 'redux-saga/effects'

//actions
import * as types from '../../actions/actionTypes'
import { userLoadFail, userLoadSuccess } from '../../actions'

//API
import axios from 'axios'

const apiCall = () => (
  axios.get("http://localhost:5000/users").catch(err => console.log(err))
)

const sagaRequest = function* sagaRequest() {
  try {
    const response = yield call(apiCall);
    yield put(userLoadSuccess(response.data))
  } catch (e) {
    yield put(userLoadFail())
  }
}

const userGetRequest = function* userGetRequest(){
  yield takeLatest(types.LOAD_USER_REQUEST,sagaRequest)
}

const userLoadListSaga = function* userLoadListSaga(){
  yield spawn(userGetRequest)
}

export default userLoadListSaga