import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  saleCreateFail,
  saleListRequest,
  saleCreateSuccess,
  messageLaunchRequest,
} from "../../actions";

import { apiPost } from "../../../global/apiMethods";
import { LANGUAGE } from "../../../config/language";

const sagaRequest = function* sagaRequest({ payload }) {
  const config = {};
  const apiCall = (data) =>
    apiPost("sales", data, true).catch(({ response }) => {
      config.title = LANGUAGE.en.message.fail.sale.create;
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
    config.messages = [LANGUAGE.en.message.success.sale.create];
    yield put(saleCreateSuccess(response.data));
    yield put(saleListRequest());
  } catch (e) {
    yield put(saleCreateFail());
  }
  yield put(messageLaunchRequest(config));
};

const saleCreateRequest = function* saleCreateRequest() {
  yield takeLatest(types.SALES_CREATE_REQUEST, sagaRequest);
};

const saleCreateSaga = function* saleCreateSaga() {
  yield spawn(saleCreateRequest);
};

export default saleCreateSaga;
