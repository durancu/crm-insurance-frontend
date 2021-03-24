import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  saleUpdateFail,
  saleUpdateSuccess,
  saleListRequest,
  messageLaunchRequest,
} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";
import { LANGUAGE } from "../../../config/language";


const sagaRequest = function* sagaRequest(action) {
  const config = {};
  const apiCall = (data, _id) =>
    apiUpdate(`sales/${_id}`, data, true).catch(({ response }) => {
      config.title = LANGUAGE.en.message.fail.sale.update;
      config.visible = true;
      config.type = "error";
      config.statusCode = response.data.statusCode;
      config.messages = [response.data.message];
      return console.log(response);
    });
  const { payload } = action;
  try {
    const id = payload._id;
    delete payload._id;

    const response = yield call(apiCall, payload, id);
    config.title = "Success";
    config.visible = true;
    config.type = "success";
    config.messages = [LANGUAGE.en.message.success.sale.update];
    yield put(saleUpdateSuccess(response.data));
    yield put(saleListRequest());
  } catch (e) {
    yield put(saleUpdateFail());
  }
  yield put(messageLaunchRequest(config));
};

const saleUpdateRequest = function* saleUpdateRequest() {
  yield takeLatest(types.SALES_UPDATE_REQUEST, sagaRequest);
};

const saleUpdateSaga = function* saleUpdateSaga() {
  yield spawn(saleUpdateRequest);
};

export default saleUpdateSaga;
