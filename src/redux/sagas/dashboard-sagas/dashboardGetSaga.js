import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { dashboardGetSuccess, dashboardGetFail } from "../../actions";
import { apiGet } from "../../../global/apiMethods";

const apiCall = (queryParams = "") =>
  apiGet(`dashboards?${queryParams}`, true).catch((error) => console.log(error.response.data));

const sagaRequest = function* sagaRequest({ queryParams }) {
  try {
    const response = yield call(apiCall, queryParams);
    yield put(dashboardGetSuccess(response.data));
  } catch (err) {
    yield put(dashboardGetFail());
  }
};

const dashboardGetRequest = function* dashboardGetRequest() {
  yield takeLatest(types.DASHBOARDS_LIST_REQUEST, sagaRequest);
};

const dashboardGetSaga = function* dashboardGetSaga() {
  yield spawn(dashboardGetRequest);
};

export default dashboardGetSaga;
