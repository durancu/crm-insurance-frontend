import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  insurerUpdateFail,
  insurerUpdateSuccess,
  insurerListRequest,
  messageLaunchRequest,
  insurerUpdateError,
} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest(action) {
  let config = {};
  const apiCall = (data, _id) =>
    apiUpdate(`insurers/${_id}`, data, true).catch(({ response }) => {
      config = formatterMessage(response, "insurer", "update");
      return console.log(response);
    });
  const { payload, _id } = action;
  try {
    const response = yield call(apiCall, payload, _id);
    config = formatterMessage(response, "insurer", "update");

    switch (config.type) {
      case "success":
        yield put(insurerUpdateSuccess());
        yield put(insurerListRequest());
        break;
      case "error":
        yield put(insurerUpdateError());
        break;
      default:
        break;
    }
  } catch (e) {
    yield put(insurerUpdateFail());
  }
  yield put(messageLaunchRequest(config));
};

const insurerUpdateRequest = function* insurerUpdateRequest() {
  yield takeLatest(types.INSURERS_UPDATE_REQUEST, sagaRequest);
};

const insurerUpdateSaga = function* insurerUpdateSaga() {
  yield spawn(insurerUpdateRequest);
};

export default insurerUpdateSaga;
