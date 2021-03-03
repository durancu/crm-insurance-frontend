import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import {
  userAuthFail,
  userAuthSuccess,
  userProfileSetRequest
} from "../../actions";
import { apiPost } from "../../../global/apiMethods";
import { setSessionData } from "../../../global/sessionStore";

const apiCall = (data) =>
  apiPost("auth/login", data).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest(action) {
  const { payload } = action;
  try {
    const response = yield call(apiCall, payload);
    setSessionData("token", response.data.access_token);
    yield put(userProfileSetRequest());
    yield put(userAuthSuccess());
  } catch (e) {
    yield put(userAuthFail());
  }
};

const userAuthRequest = function* userAuthRequest() {
  yield takeLatest(types.USER_AUTH_REQUEST, sagaRequest);
};

const userAuthSaga = function* userAuthSaga() {
  yield spawn(userAuthRequest);
};

export default userAuthSaga;
