import * as types from "../actionTypes";

export const reportSalaryRequest = (payload = {}, queryParams = {}) => ({
  type: types.REPORT_SALARY_REQUEST,
  payload,
  queryParams,
});

export const reportSalaryFail = () => ({
  type: types.REPORT_SALARY_FAIL,
});

export const reportSalaryError = () => ({
  type: types.REPORT_SALARY_ERROR,
});

export const reportSalarySuccess = (payload) => ({
  type: types.REPORT_SALARY_SUCCESS,
  payload,
});
