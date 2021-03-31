import * as types from "../actionTypes";

export const reportProfitRequest = (payload = {}, queryParams = {}) => ({
  type: types.REPORT_PROFIT_REQUEST,
  payload,
  queryParams,
});

export const reportProfitFail = () => ({
  type: types.REPORT_PROFIT_FAIL,
});

export const reportProfitError = () => ({
  type: types.REPORT_PROFIT_ERROR,
});

export const reportProfitSuccess = (payload) => ({
  type: types.REPORT_PROFIT_SUCCESS,
  payload,
});
