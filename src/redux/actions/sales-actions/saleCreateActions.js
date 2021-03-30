import * as types from "../actionTypes";

export const saleCreateRequest = (payload) => ({
  type: types.SALES_CREATE_REQUEST,
  payload,
});

export const saleCreateFail = () => ({
  type: types.SALES_CREATE_FAIL,
});

export const saleCreateError = () => ({
  type: types.SALES_CREATE_ERROR,
});

export const saleCreateSuccess = (payload) => ({
  type: types.SALES_CREATE_SUCCESS,
  payload,
});
