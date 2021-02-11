import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { insurerGetFail, insurerGetSuccess } from "../../actions";

import { apiGet } from "../../../global/apiMethods";

const apiCall = (id) =>
  apiGet(`insurers/${id}`, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(insurerGetSuccess(response.data));
  } catch (e) {
    yield put(insurerGetFail());
  }
};

const insurerGetRequest = function* insurerGetRequest() {
  yield takeLatest(types.INSURERS_GET_REQUEST, sagaRequest);
};

const insurerGetSaga = function* insurerGetSaga(){
  yield spawn(insurerGetRequest)
}

export default insurerGetSaga
