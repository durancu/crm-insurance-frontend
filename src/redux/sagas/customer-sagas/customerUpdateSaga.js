import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  customerUpdateFail,
  customerUpdateSuccess,
  customerLoadRequest,
  messageLaunchRequest,
  customerUpdateError,
} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest({ payload, _id }) {
  let config = {};
  const apiCall = (data, _id) =>
    apiUpdate(`customers/${_id}`, data, true).catch(({ response }) => {
      config = formatterMessage(response, "customer", "update");
      return console.log(response);
    });
  try {
    const response = yield call(apiCall, payload, _id);
    config = formatterMessage(response, "customer", "create");

    switch (config.type) {
      case "success":
        yield put(customerUpdateSuccess(response.data));
        yield put(customerLoadRequest());
        break;
      case "error":
        yield put(customerUpdateError());
        break;
      default:
        break;
    }
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
