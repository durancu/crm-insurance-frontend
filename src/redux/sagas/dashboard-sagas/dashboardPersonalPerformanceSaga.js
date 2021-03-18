import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import {
  dashboardPersonalPerformanceSuccess,
  dashboardPersonalPerformanceFail,
} from "../../actions";
import { apiGet } from "../../../global/apiMethods";

import { queryStringFromObject } from "../../../global/utils";

const apiCall = (queryParams) => {
  const queryStr = queryStringFromObject(queryParams);

  return apiGet(`reports/performance/user?${queryStr}`, true).catch((error) =>
    console.log(error)
  );
};

const sagaRequest = function* sagaRequest({ queryParams }) {
  try {
    const response = yield call(apiCall,  queryParams);
    /* yield put(dashboardPersonalPerformanceSuccess(data)); */
     yield put(dashboardPersonalPerformanceSuccess(response.data.data));
  } catch (err) {
    yield put(dashboardPersonalPerformanceFail());
  }
};

const dashboardPersonalPerformanceRequest = function* dashboardPersonalPerformanceRequest() {
  yield takeLatest(types.DASHBOARD_PERSONAL_PERFORMANCE_REQUEST, sagaRequest);
};

const dashboardPersonalPerformanceSaga = function* dashboardPersonalPerformanceSaga() {
  yield spawn(dashboardPersonalPerformanceRequest);
};

export default dashboardPersonalPerformanceSaga;
