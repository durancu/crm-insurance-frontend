import * as types from "../actionTypes";

export const saleUpdateRequest = (payload) => ({
  type: types.SALES_UPDATE_REQUEST,
  payload,
});

export const saleUpdateFail = () => ({
  type: types.SALES_UPDATE_FAIL,
});
export const saleUpdateError = () => ({
  type: types.SALES_UPDATE_ERROR,
});

export const saleUpdateSuccess = (payload) => ({
  type: types.SALES_UPDATE_SUCCESS,
  payload,
});
