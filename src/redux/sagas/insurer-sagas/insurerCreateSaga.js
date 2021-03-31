import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  insurerCreateError,
  insurerCreateFail,
  insurerCreateSuccess,
  insurerListRequest,
  messageLaunchRequest,
} from "../../actions";

import { apiPost } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest({ payload }) {
  let config = {};
  const apiCall = (data) =>
    apiPost("insurers", data, true).catch(({ response }) => {
      config = formatterMessage(response, "insurer", "create");
      return console.log(response);
    });
  try {
    const response = yield call(apiCall, payload);
    config = formatterMessage(response, "insurer", "create");
    switch (config.type) {
      case "success":
        yield put(insurerCreateSuccess(response.data));
        yield put(insurerListRequest());
        break;
      case "error":
        yield put(insurerCreateError());
        break;
      default:
        break;
    }
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
