import * as types from "../actionTypes";

/** Action creator
 * @param {object} payload
 * @returns {object} payload
 */
export const userCreateRequest = (payload) => ({
  type: types.USER_CREATE_REQUEST,
  payload,
});

/** Action creator
 * @returns {string} action
 */
export const userCreateFail = () => ({
  type: types.USER_CREATE_FAIL,
});
/** Action creator
 * @returns {string} action
 */
export const userCreateError = () => ({
  type: types.USER_CREATE_ERROR,
});

/** Action creator
 * @param {object} payload
 * @returns {object} payload
 */
export const userCreateSuccess = (payload) => ({
  type: types.USER_CREATE_SUCCESS,
  payload,
});
