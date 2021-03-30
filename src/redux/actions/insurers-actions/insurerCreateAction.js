import * as types from "../actionTypes";

/** Action creator
 * @param {object} payload
 * @returns {object} payload
 */
export const insurerCreateRequest = (payload) => ({
  type: types.INSURERS_CREATE_REQUEST,
  payload,
});

/** Action creator
 * @returns {string} action
 */
export const insurerCreateFail = () => ({
  type: types.INSURERS_CREATE_FAIL,
});
/** Action creator
 * @returns {string} action
 */
export const insurerCreateError = () => ({
  type: types.INSURERS_CREATE_ERROR,
});

/** Action creator
 * @param {object} payload
 * @returns {object} payload
 */
export const insurerCreateSuccess = (payload) => ({
  type: types.INSURERS_CREATE_SUCCESS,
  payload,
});
