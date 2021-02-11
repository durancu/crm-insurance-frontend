import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { reportListSuccess, reportListFail,saleListRequest } from "../../actions";
import { apiGet } from "../../../global/apiMethods";

const apiCall = () =>
  apiGet(`reports/sales`, true).catch((error) => console.log(error));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall);
    yield put(reportListSuccess(response.data));
    yield put(saleListRequest());
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
