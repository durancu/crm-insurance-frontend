import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { userCreateFail, userCreateSuccess } from "../../actions";

import { apiPost } from "../../../global/apiMethods";

const apiCall = (data) =>
  apiPost("users", data, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(userCreateSuccess(response.data));
  } catch (e) {
    yield put(userCreateFail());
  }
};

const userCreateRequest = function* userCreateRequest() {
  yield takeLatest(types.USER_CREATE_REQUEST, sagaRequest);
};

const userCreateSaga = function* userCreateSaga(){
  yield spawn(userCreateRequest)
}

export default userCreateSaga
