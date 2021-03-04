import { /*call,*/ put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import {
  userLogoutFail,
  userLogoutSuccess,
  userProfileGetRequest,
  filterGetFail,
} from "../../actions";
import { deleteSessionData } from "../../../global/sessionStore";


const sagaRequest = function* sagaRequest() {
  try {
    yield deleteSessionData("token");
    yield deleteSessionData("profile");
    yield put(userProfileGetRequest());
    yield put(userLogoutSuccess());
    yield put(filterGetFail());
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
