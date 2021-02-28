import { call, put, takeLatest, spawn, takeEvery } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { dashboardGetSuccess, dashboardGetFail } from "../../actions";
import { apiGet } from "../../../global/apiMethods";

const apiCall = (payload = {}) =>
  apiGet(`dashboards/${payload.model}/${payload.chart_type}?${queryStringFromObject(payload.query_params)}`, true).catch((error) => console.log(error.response.data));

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
  yield takeEvery(types.DASHBOARD_GET_REQUEST, sagaRequest);
};

const dashboardGetSaga = function* dashboardGetSaga() {
  yield spawn(dashboardGetRequest);
};

export default dashboardGetSaga;


const queryStringFromObject = function (object) {
  var parameters = [];
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      parameters.push(encodeURI(property + '=' + object[property]));
    }
  }

  return parameters.join('&');
}
