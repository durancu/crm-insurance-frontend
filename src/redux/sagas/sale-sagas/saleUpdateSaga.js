import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  saleUpdateFail,
  saleUpdateSuccess,
  saleListRequest,
  messageLaunchRequest,
  saleUpdateError,
} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest(action) {
  let config = {};
  const apiCall = (data, _id) =>
    apiUpdate(`sales/${_id}`, data, true).catch(({ response }) => {
      config = formatterMessage(response, "sale", "update");
    });
  const { payload } = action;
  try {
    const id = payload._id;
    delete payload._id;
    const response = yield call(apiCall, payload, id);
    config = formatterMessage(response, "sale", "update");
    switch (config.type) {
      case "success":
        yield put(saleUpdateSuccess(response.data));
        yield put(saleListRequest());
        break;
      case "error":
        yield put(saleUpdateError());
        break;
      default:
        break;
    }
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
