import * as types from "../actionTypes";

export const saleGetRequest = (payload) => ({
  type: types.SALES_GET_REQUEST,
  payload
});

export const saleGetFail = () => ({
  type: types.SALES_GET_FAIL,
});

export const saleGetSuccess = (payload) => ({
  type: types.SALES_GET_SUCCESS,
  payload,
});
