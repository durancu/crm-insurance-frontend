import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { customerGetFail, customerGetSuccess } from "../../actions";

import { apiGet } from "../../../global/apiMethods";

const apiCall = (id) =>
  apiGet(`customers/${id}`, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(customerGetSuccess(response.data));
  } catch (e) {
    yield put(customerGetFail());
  }
};

const customerGetRequest = function* customerGetRequest() {
  yield takeLatest(types.CUSTOMERS_GET_REQUEST, sagaRequest);
};

const customerGetSaga = function* customerGetSaga(){
  yield spawn(customerGetRequest)
}

export default customerGetSaga
