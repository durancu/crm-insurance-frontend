import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  customerUpdateFail,
  customerUpdateSuccess,
  customerLoadRequest,
  messageLaunchRequest,
} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";
import { LANGUAGE } from "../../../config/language";

const sagaRequest = function* sagaRequest({ payload, _id }) {
  const config = {};
  const apiCall = (data, _id) =>
    apiUpdate(`customers/${_id}`, data, true).catch(({ response }) => {
      config.title = LANGUAGE.en.message.fail.customer.update;
      config.visible = true;
      config.type = "error";
      config.statusCode = response.data.statusCode;
      config.messages = [response.data.message];
      return console.log(response);
    });
  try {
    const response = yield call(apiCall, payload, _id);
    config.title = "Success";
    config.visible = true;
    config.type = "success";
    config.messages = [LANGUAGE.en.message.success.customer.update];
    yield put(customerUpdateSuccess(response.data));
    yield put(customerLoadRequest());
  } catch (e) {
    yield put(customerUpdateFail());
  }
  yield put(messageLaunchRequest(config));
};

const customerUpdateRequest = function* customerUpdateRequest() {
  yield takeLatest(types.CUSTOMERS_UPDATE_REQUEST, sagaRequest);
};

const customerUpdateSaga = function* customerUpdateSaga() {
  yield spawn(customerUpdateRequest);
};

export default customerUpdateSaga;
