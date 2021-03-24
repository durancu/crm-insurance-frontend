import * as types from "../actionTypes";

export const messageLaunchRequest = (payload) => ({
  type: types.MESSAGE_LAUNCH_REQUEST,
  payload,
});
export const messageLaunchFail = () => ({
  type: types.MESSAGE_LAUNCH_FAIL,
});
export const messageLaunchSuccess = (payload) => ({
  type: types.MESSAGE_LAUNCH_SUCCESS,
  payload,
});
