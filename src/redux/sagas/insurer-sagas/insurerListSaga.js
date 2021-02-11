import { call, put, spawn, takeLatest } from "redux-saga/effects";
//actions
import * as types from "../../actions/actionTypes";
import { insurerListFail, insurerListSuccess } from "../../actions";
//API
import { apiGet } from "../../../global/apiMethods";

const apiCall = () =>
  apiGet("insurers", true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest() {
  try {
    const response = yield call(apiCall);
    yield put(insurerListSuccess(response.data));
  } catch (e) {
    yield put(insurerListFail());
  }
};

const insurerListRequest = function* insurerListRequest() {
  yield takeLatest(types.INSURERS_LIST_REQUEST, sagaRequest);
};

const insurerListSaga = function* insurerListSaga() {
  yield spawn(insurerListRequest);
};

export default insurerListSaga;
