import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { insurerCreateFail, insurerCreateSuccess } from "../../actions";

import { apiPost } from "../../../global/apiMethods";

const apiCall = (data) =>
  apiPost("insurers", data, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  console.log(payload)
  try {
    const response = yield call(apiCall, payload);
    yield put(insurerCreateSuccess(response.data));
  } catch (e) {
    yield put(insurerCreateFail());
  }
};

const insurerCreateRequest = function* insurerCreateRequest() {
  yield takeLatest(types.INSURERS_CREATE_REQUEST, sagaRequest);
};

const insurerCreateSaga = function* insurerCreateSaga(){
  yield spawn(insurerCreateRequest)
}

export default insurerCreateSaga
