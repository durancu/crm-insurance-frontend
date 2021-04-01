import * as types from "../actionTypes";

export const allowedIpGetRequest = () => ({
  type: types.ALLOWED_IP_GET_REQUEST,
});
export const allowedIpGetFail = () => ({
  type: types.ALLOWED_IP_GET_FAIL,
});
export const allowedIpGetSuccess = (payload) => ({
  type: types.ALLOWED_IP_GET_SUCCESS,
  payload,
});
