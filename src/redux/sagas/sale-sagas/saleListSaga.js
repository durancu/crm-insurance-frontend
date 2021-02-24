import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { saleListSuccess, saleListFail } from "../../actions";
import { apiGet } from "../../../global/apiMethods";

const apiCall = (param = "") =>
  apiGet(`sales?${param}`, true).catch((error) => console.log(error));

const sagaRequest = function* sagaRequest({ payload }) {
  console.log(payload)
  try {
    const response = yield call(apiCall);
    yield put(saleListSuccess(response.data));
  } catch (e) {
    yield put(saleListFail());
  }
};

const saleListRequest = function* saleListRequest() {
  yield takeLatest(types.SALES_LIST_REQUEST, sagaRequest);
};

const saleListSaga = function* saleListSaga() {
  yield spawn(saleListRequest);
};

export default saleListSaga;
