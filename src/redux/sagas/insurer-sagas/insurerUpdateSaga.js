import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { insurerUpdateFail, insurerUpdateSuccess, insurerListRequest} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";

const apiCall = (data, _id) =>
  apiUpdate(`insurers/${_id}`, data, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest(action) {
  const { payload, _id } = action;
  try {
    yield call(apiCall, payload, _id);
    yield put(insurerUpdateSuccess());
    yield put(insurerListRequest());
  } catch (e) {
    yield put(insurerUpdateFail());
  }
};

const insurerUpdateRequest = function* insurerUpdateRequest() {
  yield takeLatest(types.INSURERS_UPDATE_REQUEST, sagaRequest);
};

const insurerUpdateSaga = function* insurerUpdateSaga() {
  yield spawn(insurerUpdateRequest);
};

export default insurerUpdateSaga;
