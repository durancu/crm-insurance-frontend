import * as types from "../actionTypes";

/** Action creator
 * @param {string} _id
 * @returns {object} payload
 */
export const insurerDeleteRequest = (_id) => ({
  type: types.INSURERS_DELETE_REQUEST,
  payload: _id,
});

/** Action creator
 * @returns {string} action
 */
export const insurerDeleteFail = () => ({
  type: types.INSURERS_DELETE_FAIL,
});
/** Action creator
 * @returns {string} action
 */
export const insurerDeleteError = () => ({
  type: types.INSURERS_DELETE_ERROR,
});

/** Action creator
 * @param {object} payload
 * @returns {object} payload
 */
export const insurerDeleteSuccess = (payload) => ({
  type: types.INSURERS_DELETE_SUCCESS,
  payload,
});
