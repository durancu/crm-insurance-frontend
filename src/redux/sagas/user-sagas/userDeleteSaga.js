import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { userDeleteFail, userDeleteSuccess } from "../../actions";

import { apiDelete } from "../../../global/apiMethods";

const apiCall = (id) =>
  apiDelete(`users/${id}`, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(userDeleteSuccess(response.data._id));
  } catch (e) {
    yield put(userDeleteFail());
  }
};

const userDeleteRequest = function* userDeleteRequest() {
  yield takeLatest(types.USER_DELETE_REQUEST, sagaRequest);
};

const userDeleteSaga = function* userDeleteSaga() {
  yield spawn(userDeleteRequest);
};

export default userDeleteSaga;
