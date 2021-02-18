import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { saleGetFail, saleGetSuccess } from "../../actions";

import { apiGet } from "../../../global/apiMethods";

const apiCall = (id) =>
  apiGet(`sales/${id}`, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(saleGetSuccess(response.data));
  } catch (e) {
    yield put(saleGetFail());
  }
};

const saleGetRequest = function* saleGetRequest() {
  yield takeLatest(types.SALES_GET_REQUEST, sagaRequest);
};

const saleGetSaga = function* saleGetSaga(){
  yield spawn(saleGetRequest)
}

export default saleGetSaga
