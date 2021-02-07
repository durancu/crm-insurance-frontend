import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { customerUpdateFail, customerUpdateSuccess, customerLoadRequest} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";

const apiCall = (data, _id) =>
  apiUpdate(`customers/${_id}`, data, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest(action) {
  const { payload, _id } = action;
  try {
    const response = yield call(apiCall, payload, _id);
    yield put(customerUpdateSuccess(response.data));
    yield put(customerLoadRequest());
  } catch (e) {
    yield put(customerUpdateFail());
  }
};

const customerUpdateRequest = function* customerUpdateRequest() {
  yield takeLatest(types.CUSTOMERS_UPDATE_REQUEST, sagaRequest);
};

const customerUpdateSaga = function* customerUpdateSaga() {
  yield spawn(customerUpdateRequest);
};

export default customerUpdateSaga;
