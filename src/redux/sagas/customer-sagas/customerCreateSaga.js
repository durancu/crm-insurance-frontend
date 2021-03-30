import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  customerCreateFail,
  customerCreateError,
  customerCreateSuccess,
  messageLaunchRequest,
  customerLoadRequest,
} from "../../actions";

import { apiPost } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest({ payload }) {
  let config = {};
  const apiCall = (data) =>
    apiPost("customers", data, true).catch(({ response }) => {
      config = formatterMessage(response, "customer", "create");
      return console.log(response);
    });
  try {
    const response = yield call(apiCall, payload);
    config = formatterMessage(response, "customer", "create");

    switch (config.type) {
      case "success":
        yield put(customerCreateSuccess(response.data));
        yield put(customerLoadRequest());
        break;
      case "error":
        yield put(customerCreateError());
        break;
      default:
        break;
    }
  } catch (e) {
    yield put(customerCreateFail());
  }
  yield put(messageLaunchRequest(config));
};

const customerCreateRequest = function* customerCreateRequest() {
  yield takeLatest(types.CUSTOMERS_CREATE_REQUEST, sagaRequest);
};

const customerCreateSaga = function* customerCreateSaga() {
  yield spawn(customerCreateRequest);
};

export default customerCreateSaga;
