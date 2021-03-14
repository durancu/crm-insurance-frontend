import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { reportProfitSuccess, reportProfitFail } from "../../actions";
import { apiGet } from "../../../global/apiMethods";

import { queryStringFromObject } from "../../../global/utils";

const apiCall = (queryParams) => {
  return apiGet(
    `reports/profits?${queryStringFromObject(queryParams)}`,
    true
  ).catch((error) => console.log(error));
};

const sagaRequest = function* sagaRequest({ queryParams }) {
  try {
    const response = yield call(apiCall, queryParams);
    yield put(reportProfitSuccess(response.data.data));
  } catch (e) {
    yield put(reportProfitFail());
  }
};

const reportProfitRequest = function* reportProfitRequest() {
  yield takeLatest(types.REPORT_PROFIT_REQUEST, sagaRequest);
};

const reportProfitSaga = function* reportProfitSaga() {
  yield spawn(reportProfitRequest);
};

export default reportProfitSaga;
