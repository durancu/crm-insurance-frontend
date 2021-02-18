import { put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { userProfileGetFail, userProfileGetSuccess } from "../../actions";
import { getSessionData } from "../../../global/sessionStore";

const sagaRequest = function* sagaRequest() {
  const response = getSessionData("profile").data;

  response !== null
    ? yield put(userProfileGetSuccess(JSON.parse(response)))
    : yield put(userProfileGetFail());
};

const userProfileGetRequest = function* userProfileGetRequest() {
  yield takeLatest(types.USER_PROFILE_GET_REQUEST, sagaRequest);
};

const userProfileGetSaga = function* userProfileGetSaga() {
  yield spawn(userProfileGetRequest);
};

export default userProfileGetSaga;
