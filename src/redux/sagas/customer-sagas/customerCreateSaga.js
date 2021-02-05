import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { customerCreateFail, customerCreateSuccess } from "../../actions";

import { apiPost } from "../../../global/apiMethods";

const apiCall = (data) =>
  apiPost("customers", data, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(customerCreateSuccess(response.data));
  } catch (e) {
    yield put(customerCreateFail());
  }
};

const customerCreateRequest = function* customerCreateRequest() {
  yield takeLatest(types.CUSTOMERS_CREATE_REQUEST, sagaRequest);
};

const customerCreateSaga = function* customerCreateSaga(){
  yield spawn(customerCreateRequest)
}

export default customerCreateSaga
