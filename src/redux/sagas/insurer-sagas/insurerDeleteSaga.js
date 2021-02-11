import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { insurerDeleteFail, insurerDeleteSuccess } from "../../actions";

import { apiDelete } from "../../../global/apiMethods";

const apiCall = (id) =>
  apiDelete(`insurers/${id}`, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(insurerDeleteSuccess(response.data._id));
  } catch (e) {
    yield put(insurerDeleteFail());
  }
};

const insurerDeleteRequest = function* insurerDeleteRequest() {
  yield takeLatest(types.INSURERS_DELETE_REQUEST, sagaRequest);
};

const insurerDeleteSaga = function* insurerDeleteSaga() {
  yield spawn(insurerDeleteRequest);
};

export default insurerDeleteSaga;
