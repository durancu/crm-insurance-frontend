import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  userCreateFail,
  userCreateSuccess,
  messageLaunchRequest,
  userCreateError,
  userLoadRequest,
} from "../../actions";

import { apiPost } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest({ payload }) {
  let config = {};
  const apiCall = (data) =>
    apiPost("users", data, true).catch(({ response }) => {
      config = formatterMessage(response, "user", "create");
    });
  try {
    const response = yield call(apiCall, payload);
    config = formatterMessage(response, "user", "create");
    switch (config.type) {
      case "success":
        yield put(userCreateSuccess(response.data));
        yield put(userLoadRequest());
        break;
      case "error":
        yield put(userCreateError());
        break;
      default:
        break;
    }
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
