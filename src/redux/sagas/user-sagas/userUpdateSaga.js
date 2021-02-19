import { call, put, spawn, takeLatest } from "redux-saga/effects";

import * as types from "../../actions/actionTypes";
import { userUpdateFail, userUpdateSuccess, userLoadRequest} from "../../actions";

import { apiUpdate } from "../../../global/apiMethods";

const apiCall = (data) =>
  apiUpdate(`users/${data.id}`, data, true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest(action) {
  const { payload } = action;
  try {
    const response = yield call(apiCall, payload);
    yield put(userUpdateSuccess(response.data));
    yield put(userLoadRequest());
  } catch (e) {
    yield put(userUpdateFail());
  }
};

const userUpdateRequest = function* userUpdateRequest() {
  yield takeLatest(types.USER_UPDATE_REQUEST, sagaRequest);
};

const userUpdateSaga = function* userUpdateSaga() {
  yield spawn(userUpdateRequest);
};

export default userUpdateSaga;
