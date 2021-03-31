import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  saleCreateFail,
  saleCreateError,
  saleListRequest,
  saleCreateSuccess,
  messageLaunchRequest,
} from "../../actions";

import { apiPost } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest({ payload }) {
  let config = {};
  const apiCall = (data) =>
    apiPost("sales", data, true).catch(({ response }) => {
      config = formatterMessage(response, "sale", "create");
      return console.log(response);
    });
  try {
    const response = yield call(apiCall, payload);
    config = formatterMessage(response, "sale", "create");
    switch (config.type) {
      case "success":
        yield put(saleCreateSuccess(response.data));
        yield put(saleListRequest());
        break;
      case "error":
        yield put(saleCreateError());
        break;
      default:
        break;
    }
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
