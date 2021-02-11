import * as types from "../actionTypes";

export const saleListRequest = () => ({
  type: types.SALES_LIST_REQUEST,
});

export const saleListFail = () => ({
  type: types.SALES_LIST_FAIL,
});

export const saleListSuccess = (payload) => ({
  type: types.SALES_LIST_SUCCESS,
  payload,
});
