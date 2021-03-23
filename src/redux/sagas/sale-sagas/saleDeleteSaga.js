import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { messageLaunchRequest, saleDeleteFail, saleDeleteSuccess } from "../../actions";

import { apiDelete } from "../../../global/apiMethods";
import { LANGUAGE } from "../../../config/language";

const sagaRequest = function* sagaRequest({ payload }) {
  const config = {};
  const apiCall = (id) =>
    apiDelete(`sales/${id}`, true).catch(({ response }) => {
      config.title = LANGUAGE.en.message.fail.sale.delete;
      config.visible = true;
      config.type = "error";
      config.time=Date.now()
      config.statusCode = response.data.statusCode;
      config.messages = [response.data.message];
      return console.log(response);
    });
  try {
    const response = yield call(apiCall, payload);
    config.title = "Success";
    config.visible = true;
    config.time=Date.now()
    config.type = "success";
    config.messages = [LANGUAGE.en.message.success.sale.delete];
    yield put(saleDeleteSuccess(response.data._id));
  } catch (e) {
    yield put(saleDeleteFail());
  }
  yield put(messageLaunchRequest(config));
};

const saleDeleteRequest = function* saleDeleteRequest() {
  yield takeLatest(types.SALES_DELETE_REQUEST, sagaRequest);
};

const saleDeleteSaga = function* saleDeleteSaga() {
  yield spawn(saleDeleteRequest);
};

export default saleDeleteSaga;
