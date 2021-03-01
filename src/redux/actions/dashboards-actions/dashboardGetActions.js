import * as types from "../actionTypes";

export const dashboardGetRequest = (payload,queryParams={}) => ({
  type: types.DASHBOARD_GET_REQUEST,
  payload,
  queryParams
});

export const dashboardGetFail = () => ({
  type: types.DASHBOARD_GET_FAIL,
});

export const dashboardGetSuccess = (payload) => ({
  type: types.DASHBOARD_GET_SUCCESS,
  payload,
});
