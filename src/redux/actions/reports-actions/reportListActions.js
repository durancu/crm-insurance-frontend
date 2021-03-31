import * as types from "../actionTypes";

export const reportListRequest = (payload = {}, queryParams = {}) => ({
  type: types.REPORT_LIST_REQUEST,
  payload,
  queryParams,
});

export const reportListFail = () => ({
  type: types.REPORT_LIST_FAIL,
});

export const reportListError = () => ({
  type: types.REPORT_LIST_ERROR,
});

export const reportListSuccess = (payload) => ({
  type: types.REPORT_LIST_SUCCESS,
  payload,
});
