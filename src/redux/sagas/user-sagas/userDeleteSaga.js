import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  messageLaunchRequest,
  userDeleteError,
  userDeleteFail,
  userDeleteSuccess,
  userLoadRequest,
} from "../../actions";

import { apiDelete } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest({ payload }) {
  let config = {};
  const apiCall = (id) =>
    apiDelete(`users/${id}`, true).catch(({ response }) => {
      config = formatterMessage(response, "user", "delete");
      return console.log(response);
    });
  try {
    const response = yield call(apiCall, payload);
    config = formatterMessage(response, "user", "delete");
    switch (config.type) {
      case "success":
        yield put(userDeleteSuccess(response.data._id));
        yield put(userLoadRequest());
        break;
      case "error":
        yield put(userDeleteError());
        break;
      default:
        break;
    }
  } catch (e) {
    yield put(userDeleteFail());
  }
  yield put(messageLaunchRequest(config));
};

const userDeleteRequest = function* userDeleteRequest() {
  yield takeLatest(types.USER_DELETE_REQUEST, sagaRequest);
};

const userDeleteSaga = function* userDeleteSaga() {
  yield spawn(userDeleteRequest);
};

export default userDeleteSaga;
