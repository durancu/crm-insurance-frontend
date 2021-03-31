import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import {
  insurerDeleteFail,
  insurerDeleteSuccess,
  messageLaunchRequest,
  insurerDeleteError,
  insurerListRequest,
} from "../../actions";

import { apiDelete } from "../../../global/apiMethods";
import { formatterMessage } from "../../../config/messageConfig";

const sagaRequest = function* sagaRequest({ payload }) {
  let config = {};
  const apiCall = (id) =>
    apiDelete(`insurers/${id}`, true).catch(({ response }) => {
      config = formatterMessage(response, "insurer", "delete");
      console.log(response);
    });
  try {
    const response = yield call(apiCall, payload);
    config = formatterMessage(response, "insurer", "delete");
    switch (config.type) {
      case "success":
        yield put(insurerDeleteSuccess(response.data._id));
        yield put(insurerListRequest());
        break;
      case "error":
        yield put(insurerDeleteError());
        break;
      default:
        break;
    }
  } catch (e) {
    yield put(insurerDeleteFail());
  }
  yield put(messageLaunchRequest(config));
};

const insurerDeleteRequest = function* insurerDeleteRequest() {
  yield takeLatest(types.INSURERS_DELETE_REQUEST, sagaRequest);
};

const insurerDeleteSaga = function* insurerDeleteSaga() {
  yield spawn(insurerDeleteRequest);
};

export default insurerDeleteSaga;
