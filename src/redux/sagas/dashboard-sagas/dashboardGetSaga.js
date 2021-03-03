import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { dashboardGetSuccess, dashboardGetFail } from "../../actions";
import { apiPost } from "../../../global/apiMethods";

const apiCall = (payload, queryParams = {}) => {
  return apiPost(`dashboards/sales/batch?${queryStringFromObject(queryParams)}`, payload, true).catch((error) =>
    console.log(error)
  );
};

const sagaRequest = function* sagaRequest({ payload, queryParams }) {
  try {
    const response = yield call(apiCall, payload, queryParams);
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

const queryStringFromObject = function (object) {
  var parameters = [];
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      parameters.push(encodeURI(property + "=" + object[property]));
    }
  }

  return parameters.join("&");
}; 
