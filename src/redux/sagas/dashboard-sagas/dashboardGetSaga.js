import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { dashboardGetSuccess, dashboardGetFail } from "../../actions";
import { apiPost } from "../../../global/apiMethods";

const test = {
  queries: [
    {
      id: 1,
      model: "sales",
      type: "bar",
      title: "Sales By Day This Month",
      queryParams: {
        dataCriteria: "totalCharge",
        groupingCriteria: "day",
        aggregation: "count",
        startDate: "2021-01-01T00:00:00.000Z",
        endDate: "2021-01-31T23:59:59.000Z",
      },
    },
    {
      id: 2,
      model: "sales",
      type: "bar",
      title: "Total Sales Amount By Location This Month",
      queryParams: {
        dataCriteria: "totalCharge",
        groupingCriteria: "location",
        aggregation: "sum",
        startDate: "2021-01-01T00:00:00.000Z",
        endDate: "2021-01-31T23:59:59.000Z",
      },
    },
    {
      id: 3,
      model: "sales",
      title: "Total Sales Amount By Seller This Month",
      type: "bar",
      queryParams: {
        dataCriteria: "totalCharge",
        groupingCriteria: "seller",
        aggregation: "sum",
        startDate: "2021-01-01T00:00:00.000Z",
        endDate: "2021-01-31T23:59:59.000Z",
      },
    },
    {
      id: 4,
      model: "sales",
      title: "Total Debt Amount By Seller This Month",
      type: "bar",
      queryParams: {
        dataCriteria: "tips",
        groupingCriteria: "seller",
        aggregation: "sum",
        startDate: "2021-01-01T00:00:00.000Z",
        endDate: "2021-01-31T23:59:59.000Z",
      },
    },
  ],
};

const apiCall = (payload) => {
  return apiPost(`dashboards/sales/batch`, test, true).catch((error) =>
    console.log(error)
  );
};

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    console.log(response.data);
    yield put(dashboardGetSuccess(response.data));
  } catch (err) {
    yield put(dashboardGetFail());
  }
};

const dashboardGetRequest = function* dashboardGetRequest() {
  yield takeLatest(types.DASHBOARD_GET_REQUEST, sagaRequest);
};

const dashboardGetSaga = function* dashboardGetSaga() {
  yield spawn(dashboardGetRequest);
};

export default dashboardGetSaga;

/* const queryStringFromObject = function (object) {
  var parameters = [];
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      parameters.push(encodeURI(property + "=" + object[property]));
    }
  }

  return parameters.join("&");
}; */
