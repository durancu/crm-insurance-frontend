import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  customerDeleteFail,
  customerDeleteSuccess,
  customerDeleteError,
  customerLoadRequest,
  messageLaunchRequest,
} from "../../actions";

import { apiDelete } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest({ payload }) {
  let config = {};
  const apiCall = (id) =>
    apiDelete(`customers/${id}`, true).catch(({ response }) => {
      config = formatterMessage(response, "customer", "delete");
      return console.log(response);
    });

  try {
    const response = yield call(apiCall, payload);
    config = formatterMessage(response, "customer", "delete");
    switch (config.type) {
      case "success":
        yield put(customerDeleteSuccess(response.data));
        yield put(customerLoadRequest());
        break;
      case "error":
        yield put(customerDeleteError());
        break;
      default:
        break;
    }
  } catch (e) {
    yield put(customerDeleteFail());
  }
  yield put(messageLaunchRequest(config));
};

const customerDeleteRequest = function* customerDeleteRequest() {
  yield takeLatest(types.CUSTOMERS_DELETE_REQUEST, sagaRequest);
};

const customerDeleteSaga = function* customerDeleteSaga() {
  yield spawn(customerDeleteRequest);
};

export default customerDeleteSaga;
