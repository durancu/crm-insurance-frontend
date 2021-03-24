import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  userCreateFail,
  userCreateSuccess,
  messageLaunchRequest,
} from "../../actions";

import { apiPost } from "../../../global/apiMethods";
import { LANGUAGE } from "../../../config/language";

const sagaRequest = function* sagaRequest({ payload }) {
  const config = {};
  const apiCall = (data) =>
    apiPost("users", data, true).catch(({ response }) => {
      config.title = LANGUAGE.en.message.fail.user.create;
      config.visible = true;
      config.type = "error";
      config.statusCode = response.data.statusCode;
      config.messages = [response.data.message];
      return console.log(response);
    });
  try {
    const response = yield call(apiCall, payload);
    config.title = "Success";
    config.visible = true;
    config.type = "success";
    config.messages = [LANGUAGE.en.message.success.user.create];
    yield put(userCreateSuccess(response.data));
  } catch (e) {
    yield put(userCreateFail());
  }
  yield put(messageLaunchRequest(config));
};

const userCreateRequest = function* userCreateRequest() {
  yield takeLatest(types.USER_CREATE_REQUEST, sagaRequest);
};

const userCreateSaga = function* userCreateSaga() {
  yield spawn(userCreateRequest);
};

export default userCreateSaga;
