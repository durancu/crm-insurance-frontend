import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { reportListSuccess, reportListFail } from "../../actions";
import { apiGet } from "../../../global/apiMethods";

import { queryStringFromObject } from "../../../global/utils";

const apiCall = (queryParams) => {
  queryParams["with_sales"] = "true";
  queryParams["fields"] = "premium";

  return apiGet(
    `reports/sales?${queryStringFromObject(queryParams)}`,
    true
  ).catch((error) => console.log(error));
};
const sagaRequest = function* sagaRequest({ queryParams }) {
  try {
    const response = yield call(apiCall, queryParams);
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
