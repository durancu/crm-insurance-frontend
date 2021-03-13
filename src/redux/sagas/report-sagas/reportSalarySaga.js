import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { reportSalarySuccess, reportSalaryFail } from "../../actions";
import { apiGet } from "../../../global/apiMethods";

import { queryStringFromObject } from "../../../global/utils";

const apiCall = (queryParams) => {
  return apiGet(
    `reports/salaries?${queryStringFromObject(queryParams)}`,
    true
  ).catch((error) => console.log(error));
};

const sagaRequest = function* sagaRequest({ queryParams }) {
  try {
    const response = yield call(apiCall, queryParams);
    yield put(reportSalarySuccess(response.data.salaries));
  } catch (e) {
    yield put(reportSalaryFail());
  }
};

const reportSalaryRequest = function* reportSalaryRequest() {
  yield takeLatest(types.REPORT_SALARY_REQUEST, sagaRequest);
};

const reportSalarySaga = function* reportSalarySaga() {
  yield spawn(reportSalaryRequest);
};

export default reportSalarySaga;
