import * as types from "../actionTypes";

/** Action Creator
 * @param {object} payload required
 * @returns {object} action and object
 */
export const userProfileSetRequest = () => ({
  type: types.USER_PROFILE_SET_REQUEST,
});

/** Action Creator
 * @returns {string} action
 */
export const userProfileSetFail = () => ({
  type: types.USER_PROFILE_SET_FAIL,
});

/** Action Creator
 * @returns {object} action and object
 */
export const userProfileSetSuccess = (payload) => ({
  type: types.USER_PROFILE_SET_SUCCESS,
  payload,
});
/** Action Creator
 * @param {object} payload required
 * @returns {object} action and object
 */
export const userProfileGetRequest = () => ({
  type: types.USER_PROFILE_GET_REQUEST,
});

/** Action Creator
 * @returns {string} action
 */
export const userProfileGetFail = () => ({
  type: types.USER_PROFILE_GET_FAIL,
});

/** Action Creator
 * @returns {object} action and object
 */
export const userProfileGetSuccess = (payload) => ({
  type: types.USER_PROFILE_GET_SUCCESS,
  payload,
});
