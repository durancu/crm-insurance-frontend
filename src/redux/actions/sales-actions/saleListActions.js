import * as types from "../actionTypes";

export const saleListRequest = (queryParams) => ({
  type: types.SALES_LIST_REQUEST,
  queryParams
});

export const saleListFail = () => ({
  type: types.SALES_LIST_FAIL,
});

export const saleListSuccess = (payload) => ({
  type: types.SALES_LIST_SUCCESS,
  payload,
});
