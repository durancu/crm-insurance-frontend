import * as types from "../actionTypes";

export const saleListRequest = (payload, queryParams = {}) => ({
  type: types.SALES_LIST_REQUEST,
  payload,
  queryParams,
});

export const saleListFail = () => ({
  type: types.SALES_LIST_FAIL,
});

export const saleListSuccess = (payload) => ({
  type: types.SALES_LIST_SUCCESS,
  payload,
});
