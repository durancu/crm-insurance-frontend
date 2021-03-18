import { put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { filterGetFail, filterGetSuccess } from "../../actions";

const sagaRequest = function* sagaRequest({ params }) {
  try {
    yield put(filterGetSuccess(params));
  } catch (e) {
    yield put(filterGetFail());
  }
};

const filterRequest = function* filterRequest() {
  yield takeLatest(types.FILTER_SET_REQUEST, sagaRequest);
};

const filterSaga = function* filterSaga() {
  yield spawn(filterRequest);
};

export default filterSaga;
