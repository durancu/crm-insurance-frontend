import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import {
  reportListSuccess,
  reportListFail,
} from "../../actions";
import { apiGet } from "../../../global/apiMethods";

const apiCall = (param = "") =>
  apiGet(`reports/sales?${param}`, true).catch((error) => console.log(error));

const sagaRequest = function* sagaRequest({ payload }) {
  console.log(payload)
  try {
    const response = yield call(apiCall, payload);
    yield put(reportListSuccess(response.data));
  } catch (e) {
    yield put(reportListFail());
  }
};

const reportListRequest = function* reportListRequest() {
  yield takeLatest(types.REPORT_LIST_REQUEST, sagaRequest);
};

const reportListSaga = function* reportListSaga() {
  yield spawn(reportListRequest);
};

export default reportListSaga;
