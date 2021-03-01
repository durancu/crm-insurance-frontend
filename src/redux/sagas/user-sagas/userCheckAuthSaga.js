import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { userAuthCheckFail, userAuthCheckSuccess ,userLogoutRequest} from "../../actions";
import { apiGet } from "../../../global/apiMethods";
import {setSessionData} from '../../../global/sessionStore'

const apiCall = () =>
  apiGet("profile", true).catch((err) => console.log("err", err));

const sagaRequest = function* sagaRequest() {
  try {
    const response = yield call(apiCall);
    setSessionData("profile", JSON.stringify(response.data));
    yield put(userAuthCheckSuccess(response.data));
  } catch (error) {
    yield put(userLogoutRequest());
    yield put(userAuthCheckFail());
  }
};

const userCheckAuthRequest = function* userCheckAuthRequest() {
  yield takeLatest(types.USER_CHECK_AUTH_REQUEST, sagaRequest);
};

const userCheckAuthSaga = function* userCheckAuthSaga() {
  yield spawn(userCheckAuthRequest);
};

export default userCheckAuthSaga;
