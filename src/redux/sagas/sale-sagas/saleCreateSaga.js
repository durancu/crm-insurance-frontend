import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  saleCreateFail,
  saleListRequest,
  saleCreateSuccess,
} from "../../actions";

import { apiPost } from "../../../global/apiMethods";

const apiCall = (data) =>
  apiPost("sales", data, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(saleCreateSuccess(response.data));
    yield put(saleListRequest());
  } catch (e) {
    yield put(saleCreateFail());
  }
};

const saleCreateRequest = function* saleCreateRequest() {
  yield takeLatest(types.SALES_CREATE_REQUEST, sagaRequest);
};

const saleCreateSaga = function* saleCreateSaga() {
  yield spawn(saleCreateRequest);
};

export default saleCreateSaga;
