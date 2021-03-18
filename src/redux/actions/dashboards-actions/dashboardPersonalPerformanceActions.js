import * as types from "../actionTypes";

export const dashboardPersonalPerformanceRequest = (
  payload,
  queryParams = {}
) => ({
  type: types.DASHBOARD_PERSONAL_PERFORMANCE_REQUEST,
  payload,
  queryParams,
});

export const dashboardPersonalPerformanceFail = () => ({
  type: types.DASHBOARD_PERSONAL_PERFORMANCE_FAIL,
});

export const dashboardPersonalPerformanceSuccess = (payload) => ({
  type: types.DASHBOARD_PERSONAL_PERFORMANCE_SUCCESS,
  payload,
});
