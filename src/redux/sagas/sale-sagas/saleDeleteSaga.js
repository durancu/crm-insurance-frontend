import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { saleDeleteFail, saleDeleteSuccess } from "../../actions";

import { apiDelete } from "../../../global/apiMethods";

const apiCall = (id) =>
  apiDelete(`sales/${id}`, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(saleDeleteSuccess(response.data._id));
  } catch (e) {
    yield put(saleDeleteFail());
  }
};

const saleDeleteRequest = function* saleDeleteRequest() {
  yield takeLatest(types.SALES_DELETE_REQUEST, sagaRequest);
};

const saleDeleteSaga = function* saleDeleteSaga() {
  yield spawn(saleDeleteRequest);
};

export default saleDeleteSaga;
