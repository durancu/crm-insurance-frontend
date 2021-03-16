import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import {
  dashboardPersonalPerformanceSuccess,
  dashboardPersonalPerformanceFail,
} from "../../actions";
import { apiGet } from "../../../global/apiMethods";

import { queryStringFromObject } from "../../../global/utils";

const data = {
  message:
    "Hey System, it looks like you are performing great this month. Good job!",
  metrics: [
    {
      title: "Bonus",
      subtitle: "(projected)",
      label: "This month",
      valuePrefix: "$",
      value: "6000",
      valueSuffix: ".00",
      description:
        "Month's projected bonus is a value calculated based on your monthly sales, your base salary, tips and discounts.",
    },
    {
      title: "Rata",
      subtitle: "(in status)",
      label: "This week",
      valuePrefix: "",
      value: "6000",
      valueSuffix: "",
      description:
        "Month's projected bonus is a value calculated based on your monthly sales, your base salary, tips and discounts.",
    },
  ],
};

const apiCall = (queryParams) => {
  const queryStr = queryStringFromObject(queryParams);

  return apiGet(`reports/performance/user?${queryStr}`, true).catch((error) =>
    console.log(error)
  );
};

const sagaRequest = function* sagaRequest({ queryParams }) {
  try {
    //const response = yield call(apiCall,  queryParams);
    yield put(dashboardPersonalPerformanceSuccess(data));
    /*  yield put(dashboardPersonalPerformanceSuccess(response.data)); */
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
