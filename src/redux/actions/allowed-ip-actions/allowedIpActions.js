import * as types from "../actionTypes";

export const ipCheckStatusGetRequest = () => ({
  type: types.ALLOWED_IP_GET_REQUEST,
});
export const ipCheckStatusGetFail = () => ({
  type: types.ALLOWED_IP_GET_FAIL,
});
export const ipCheckStatusGetSuccess = (payload) => ({
  type: types.ALLOWED_IP_GET_SUCCESS,
  payload,
});
