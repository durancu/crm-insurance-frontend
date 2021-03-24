import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  insurerUpdateFail,
  insurerUpdateSuccess,
  insurerListRequest,
  messageLaunchRequest,
} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";
import { LANGUAGE } from "../../../config/language";

const sagaRequest = function* sagaRequest(action) {
  const config = {};
  const apiCall = (data, _id) =>
    apiUpdate(`insurers/${_id}`, data, true).catch(({ response }) => {
      config.title = LANGUAGE.en.message.fail.insurer.update;
      config.visible = true;
      config.type = "error";
      config.statusCode = response.data.statusCode;
      config.messages = [response.data.message];
      return console.log(response);
    });
  const { payload, _id } = action;
  try {
    yield call(apiCall, payload, _id);
    config.title = "Success";
    config.visible = true;
    config.type = "success";
    config.messages = [LANGUAGE.en.message.success.insurer.update];
    yield put(insurerUpdateSuccess());
    yield put(insurerListRequest());
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
