import * as types from "../actionTypes";

export const reportListRequest = () => ({
  type: types.REPORT_LIST_REQUEST,
});

export const reportListFail = () => ({
  type: types.REPORT_LIST_FAIL,
});

export const reportListSuccess = (payload) => ({
  type: types.REPORT_LIST_SUCCESS,
  payload,
});
