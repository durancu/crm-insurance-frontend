import * as types from "../actionTypes";

/** Action creator
 * @param {string} _id
 * @returns {object} payload
 */
export const userDeleteRequest = (_id) => ({
  type: types.USER_DELETE_REQUEST,
  payload: _id,
});

/** Action creator
 * @returns {string} action
 */
export const userDeleteFail = () => ({
  type: types.USER_DELETE_FAIL,
});
/** Action creator
 * @returns {string} action
 */
export const userDeleteError = () => ({
  type: types.USER_DELETE_ERROR,
});

/** Action creator
 * @param {object} payload
 * @returns {object} payload
 */
export const userDeleteSuccess = (payload) => ({
  type: types.USER_DELETE_SUCCESS,
  payload,
});
