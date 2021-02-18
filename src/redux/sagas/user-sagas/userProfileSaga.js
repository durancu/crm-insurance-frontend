import { call, put, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { userProfileSetFail, userProfileSetSuccess } from "../../actions";
import { apiGet } from "../../../global/apiMethods";
import { setSessionData } from "../../../global/sessionStore";

const apiCall = () => apiGet("profile", true).catch((err) => console.log(err));

const sagaRequest = function* sagaRequest() {
  try {
    const response = yield call(apiCall);
    setSessionData("profile", JSON.stringify(response.data));
    yield put(userProfileSetSuccess(response.data));
  } catch (e) {
    yield put(userProfileSetFail());
  }
};

const userProfileRequest = function* userProfileRequest() {
  yield takeLatest(types.USER_PROFILE_SET_REQUEST, sagaRequest);
};

const userProfileSaga = function* userProfileSaga() {
  yield spawn(userProfileRequest);
};

export default userProfileSaga;
