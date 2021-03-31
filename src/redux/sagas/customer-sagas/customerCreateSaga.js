import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { customerCreateFail, customerCreateSuccess, messageLaunchRequest } from "../../actions";

import { apiPost } from "../../../global/apiMethods";
import { LANGUAGE } from "../../../config/language";


const sagaRequest = function* sagaRequest({ payload }) {
  const config = {};
  const apiCall = (data) =>
    apiPost("customers", data, true).then((response) => {
      console.log(response.data);
      if (response.status >= 200 && response.status < 300) {
        config.title = 'Success';
        config.visible = true;
        config.type = "success";
        config.messages = [LANGUAGE.en.message.success.customer.create];
        put(customerCreateSuccess(response.data));
      } else {
        config.title = 'Error';
        config.visible = true;
        config.type = "error";
        config.messages = [LANGUAGE.en.message.error.customer.create, response.message];
        put(customerCreateFail());
      }

    }).catch(({ response }) => {
      config.title = 'Error';
      config.visible = true;
      config.type = "error";
      config.statusCode = response.data.statusCode;
      config.messages = [response.data.message];
      return console.log(response);
    });
  try {
    yield call(apiCall, payload);
  } catch (e) {
    yield put(customerCreateFail());
  }
  yield put(messageLaunchRequest(config));
};

const customerCreateRequest = function* customerCreateRequest() {
  yield takeLatest(types.CUSTOMERS_CREATE_REQUEST, sagaRequest);
};

const customerCreateSaga = function* customerCreateSaga() {
  yield spawn(customerCreateRequest)
}

export default customerCreateSaga
