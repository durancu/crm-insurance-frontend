import { /*call,*/ put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import {
  userLogoutFail,
  userLogoutSuccess,
  userProfileGetRequest,
} from "../../actions";
import { deleteSessionData } from "../../../global/sessionStore";

const sagaRequest = function* sagaRequest() {
  deleteSessionData("token");
  deleteSessionData("profile");
  try {
    yield put(userProfileGetRequest());
    yield put(userLogoutSuccess());
  } catch (e) {
    yield put(userLogoutFail());
  }
};

const userLogoutRequest = function* userLogoutRequest() {
  yield takeLatest(types.USER_LOGOUT_REQUEST, sagaRequest);
};

const userLogoutSaga = function* userLogoutSaga() {
  yield spawn(userLogoutRequest);
};

export default userLogoutSaga;
