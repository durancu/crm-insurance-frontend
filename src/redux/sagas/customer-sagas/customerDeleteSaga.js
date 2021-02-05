import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { customerDeleteFail, customerDeleteSuccess } from "../../actions";

import { apiDelete } from "../../../global/apiMethods";

const apiCall = (id) =>
  apiDelete(`customers/${id}`, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(customerDeleteSuccess(response.data._id));
  } catch (e) {
    yield put(customerDeleteFail());
  }
};

const customerDeleteRequest = function* customerDeleteRequest() {
  yield takeLatest(types.CUSTOMERS_DELETE_REQUEST, sagaRequest);
};

const customerDeleteSaga = function* customerDeleteSaga() {
  yield spawn(customerDeleteRequest);
};

export default customerDeleteSaga;
