import { put, call, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { allowedIpGetFail, allowedIpGetSuccess } from "../../actions";
import { userIpIsAllowed, userPublicIPV4Address } from "../../../global/utils";

const sagaRequest = function* sagaRequest() {
  const ipData = {};
  try {
    ipData.ipAddress = yield call(userPublicIPV4Address);
    ipData.allowedIp = yield call(userIpIsAllowed);

    //console.log(`ipData`, ipData)
    yield put(allowedIpGetSuccess(ipData));
  } catch (e) {
    yield put(allowedIpGetFail());
  }
};

const allowedIpRequest = function* allowedIpRequest() {
  yield takeLatest(types.ALLOWED_IP_GET_REQUEST, sagaRequest);
};

const allowedIpGetSaga = function* allowedIpGetSaga() {
  yield spawn(allowedIpRequest);
};

export default allowedIpGetSaga;
