import * as types from "../actionTypes";

export const userAuthCheckRequest = () => ({
  type: types.USER_CHECK_AUTH_REQUEST,
});
export const userAuthCheckFail = () => ({
  type: types.USER_CHECK_AUTH_FAIL,
});
export const userAuthCheckSuccess = (payload) => ({
  type: types.USER_CHECK_AUTH_SUCCESS,
  payload,
});
