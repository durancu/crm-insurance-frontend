import { put, call, takeLatest, spawn } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import { checkIpStatusGetFail, checkIpStatusGetSuccess } from "../../actions";
import { checkUserIpStatus, userPublicIPV4Address } from "../../../global/utils";

const sagaRequest = function* sagaRequest() {
  const ipData = {};
  try {
    ipData.ipAddress = yield call(userPublicIPV4Address);
    ipData.checkIpStatus = yield call(checkUserIpStatus);

    console.log(`ipData`, ipData)
    yield put(checkIpStatusGetSuccess(ipData));
  } catch (e) {
    yield put(checkIpStatusGetFail());
  }
};

const checkIpStatusRequest = function* checkIpStatusRequest() {
  yield takeLatest(types.ALLOWED_IP_GET_REQUEST, sagaRequest);
};

const checkIpStatusGetSaga = function* checkIpStatusGetSaga() {
  yield spawn(checkIpStatusRequest);
};

export default checkIpStatusGetSaga;
