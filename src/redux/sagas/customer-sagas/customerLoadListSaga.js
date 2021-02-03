import { call, put, spawn, takeLatest } from 'redux-saga/effects'
//actions
import * as types from '../../actions/actionTypes'
import { customerLoadFail, customerLoadSuccess } from '../../actions'
//API
import { apiGet } from '../../../global/apiMethods'

const apiCall = () => (
  apiGet('customers',true).catch(err => console.log(err))
)

const sagaRequest = function* sagaRequest() {
  try {
    const response = yield call(apiCall)
    yield put(customerLoadSuccess(response.data))
  } catch (e) {
    yield put(customerLoadFail())
  }
}

const customerLoadRequest = function* customerLoadRequest() {
  yield takeLatest(types.CUSTOMERS_LOAD_REQUEST, sagaRequest)
}

const customerLoadListSaga = function* customerLoadListSaga() {
  yield spawn(customerLoadRequest)
}

export default customerLoadListSaga