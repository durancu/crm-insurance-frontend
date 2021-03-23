import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  insurerCreateFail,
  insurerCreateSuccess,
  messageLaunchRequest,
} from "../../actions";

import { apiPost } from "../../../global/apiMethods";
import { LANGUAGE } from "../../../config/language";

const sagaRequest = function* sagaRequest({ payload }) {
  const config = {};
  const apiCall = (data) =>
    apiPost("insurers", data, true).catch(({ response }) => {
      config.title = LANGUAGE.en.message.fail.insurer.create;
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
    config.messages = [LANGUAGE.en.message.success.insurer.create];
    yield put(insurerCreateSuccess(response.data));
  } catch (e) {
    yield put(insurerCreateFail());
  }
  yield put(messageLaunchRequest(config));
};

const insurerCreateRequest = function* insurerCreateRequest() {
  yield takeLatest(types.INSURERS_CREATE_REQUEST, sagaRequest);
};

const insurerCreateSaga = function* insurerCreateSaga() {
  yield spawn(insurerCreateRequest);
};

export default insurerCreateSaga;
