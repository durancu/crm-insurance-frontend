import { put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { messageLaunchFail, messageLaunchSuccess } from "../../actions";

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    yield put(messageLaunchSuccess(payload));
  } catch (e) {
    yield put(messageLaunchFail());
  }
};

const messageRequest = function* messageRequest() {
  yield takeLatest(types.MESSAGE_LAUNCH_REQUEST, sagaRequest);
};

const messageSaga = function* messageSaga() {
  yield spawn(messageRequest);
};

export default messageSaga;
