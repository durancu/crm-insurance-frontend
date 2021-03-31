import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  messageLaunchRequest,
  saleDeleteError,
  saleDeleteFail,
  saleDeleteSuccess,
  saleListRequest,
} from "../../actions";

import { apiDelete } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest({ payload }) {
  let config = {};
  const apiCall = (id) =>
    apiDelete(`sales/${id}`, true).catch(({ response }) => {
      config = formatterMessage(response, "sale", "delete");
      return console.log(response);
    });
  try {
    const response = yield call(apiCall, payload);
    config = formatterMessage(response, "sale", "delete");

    switch (config.type) {
      case "success":
        yield put(saleDeleteSuccess(response.data));
        yield put(saleListRequest());
        break;
      case "error":
        yield put(saleDeleteError());
        break;
      default:
        break;
    }
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
