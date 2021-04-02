import { put, call, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { ipCheckStatusGetFail, ipCheckStatusGetSuccess } from "../../actions";
import { checkUserIpStatus, userPublicIPV4Address } from "../../../global/utils";

const sagaRequest = function* sagaRequest() {
  const ipData = {};
  try {
    ipData.ipAddress = yield call(userPublicIPV4Address);
    ipData.ipCheckStatus = yield call(checkUserIpStatus);

    console.log(`ipData`, ipData)
    yield put(ipCheckStatusGetSuccess(ipData));
  } catch (e) {
    yield put(ipCheckStatusGetFail());
  }
};

const ipCheckStatusRequest = function* ipCheckStatusRequest() {
  yield takeLatest(types.ALLOWED_IP_GET_REQUEST, sagaRequest);
};

const ipCheckStatusGetSaga = function* ipCheckStatusGetSaga() {
  yield spawn(ipCheckStatusRequest);
};

export default ipCheckStatusGetSaga;
