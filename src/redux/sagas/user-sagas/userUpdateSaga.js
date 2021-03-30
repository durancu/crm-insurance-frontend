import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  userUpdateFail,
  userUpdateSuccess,
  userLoadRequest,
  userUpdateError,
  messageLaunchRequest,
} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest(action) {
  let config = {};
  const apiCall = (data, _id) =>
    apiUpdate(`users/${_id}`, data, true).catch(({ response }) => {
      config = formatterMessage(response, "user", "update");
      return console.log(response);
    });
  const { payload, _id } = action;
  try {
    const response = yield call(apiCall, payload, _id);
    config = formatterMessage(response, "user", "update");
    switch (config.type) {
      case "success":
        yield put(userUpdateSuccess(response.data));
        yield put(userLoadRequest());
        break;
      case "error":
        yield put(userUpdateError());
        break;
      default:
        break;
    }
  } catch (e) {
    yield put(userUpdateFail());
  }
  yield put(messageLaunchRequest(config));
};

const userUpdateRequest = function* userUpdateRequest() {
  yield takeLatest(types.USER_UPDATE_REQUEST, sagaRequest);
};

const userUpdateSaga = function* userUpdateSaga() {
  yield spawn(userUpdateRequest);
};

export default userUpdateSaga;
