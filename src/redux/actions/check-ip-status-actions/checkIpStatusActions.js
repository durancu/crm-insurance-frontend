import * as types from "../actionTypes";

export const checkIpStatusGetRequest = () => ({
  type: types.ALLOWED_IP_GET_REQUEST,
});
export const checkIpStatusGetFail = () => ({
  type: types.ALLOWED_IP_GET_FAIL,
});
export const checkIpStatusGetSuccess = (payload) => ({
  type: types.ALLOWED_IP_GET_SUCCESS,
  payload,
});
