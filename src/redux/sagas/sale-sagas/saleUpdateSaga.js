import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  saleUpdateFail,
  saleUpdateSuccess,
  saleListRequest,
} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";

const apiCall = (data, _id) =>
  apiUpdate(`sales/${_id}`, data, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest(action) {
  const { payload } = action;
  try {
    const id = payload._id;
    delete payload._id;

    const response = yield call(apiCall, payload, id);
    yield put(saleUpdateSuccess(response.data));
    yield put(saleListRequest());
  } catch (e) {
    yield put(saleUpdateFail());
  }
};

const saleUpdateRequest = function* saleUpdateRequest() {
  yield takeLatest(types.SALES_UPDATE_REQUEST, sagaRequest);
};

const saleUpdateSaga = function* saleUpdateSaga() {
  yield spawn(saleUpdateRequest);
};

export default saleUpdateSaga;
