import * as types from "../actionTypes";

export const saleDeleteRequest = (payload) => ({
  type: types.SALES_DELETE_REQUEST,
  payload,
});

export const saleDeleteFail = () => ({
  type: types.SALES_DELETE_FAIL,
});

export const saleDeleteError = () => ({
  type: types.SALES_DELETE_ERROR,
});

export const saleDeleteSuccess = (payload) => ({
  type: types.SALES_DELETE_SUCCESS,
  payload,
});
