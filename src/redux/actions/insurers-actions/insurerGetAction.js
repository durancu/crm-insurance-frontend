import * as types from "../actionTypes";

/** Action creator
 * @param {string} _id
 * @returns {object} payload
 */
export const insurerGetRequest = (_id) => ({
  type: types.INSURERS_GET_REQUEST,
  payload: _id,
});

/** Action creator
 * @returns {string} action
 */
export const insurerGetFail = () => ({
  type: types.INSURERS_GET_FAIL,
});
/** Action creator
 * @returns {string} action
 */
export const insurerGetError = () => ({
  type: types.INSURERS_GET_ERROR,
});

/** Action creator
 * @param {object} payload
 * @returns {object} payload
 */
export const insurerGetSuccess = (payload) => ({
  type: types.INSURERS_GET_SUCCESS,
  payload,
});
