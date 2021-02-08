import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { userGetFail, userGetSuccess } from "../../actions";

import { apiGet } from "../../../global/apiMethods";

const apiCall = (id) =>
  apiGet(`users/${id}`, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest({ payload }) {
  try {
    const response = yield call(apiCall, payload);
    yield put(userGetSuccess(response.data));
  } catch (e) {
    yield put(userGetFail());
  }
};

const userGetRequest = function* userGetRequest() {
  yield takeLatest(types.USER_GET_REQUEST, sagaRequest);
};

const userGetSaga = function* userGetSaga(){
  yield spawn(userGetRequest)
}

export default userGetSaga
