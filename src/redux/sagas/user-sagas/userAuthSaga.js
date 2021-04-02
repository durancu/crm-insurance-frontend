import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import {
  userAuthFail,
  userAuthSuccess,
  userProfileSetRequest,
  messageLaunchRequest,
} from "../../actions";
import { apiPost } from "../../../global/apiMethods";
import { setSessionData } from "../../../global/sessionStore";
import { LANGUAGE } from "../../../config/language";

const sagaRequest = function* sagaRequest(action) {
  const config = {};

  const apiCall = (data) =>
    apiPost("auth/login", data).catch(({ response }) => {
      config.title = "Error";
      config.visible = true;
      config.type = "error";
      config.messages = [LANGUAGE.en.message.fail.user.login];

      return console.log(response);
    });

  const { payload } = action;
  try {
    const response = yield call(apiCall, payload);
    yield setSessionData("token", response.data.access_token);
    config.visible = false;
    yield put(userAuthSuccess());
    yield put(userProfileSetRequest());
  } catch (e) {
    yield put(userAuthFail());
  }
  yield put(messageLaunchRequest(config));
};

const userAuthRequest = function* userAuthRequest() {
  yield takeLatest(types.USER_AUTH_REQUEST, sagaRequest);
};

const userAuthSaga = function* userAuthSaga() {
  yield spawn(userAuthRequest);
};

export default userAuthSaga;
