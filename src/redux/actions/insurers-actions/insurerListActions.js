import * as types from "../actionTypes";

/** Action creator
 * @returns {string} action
 */
export const insurerListRequest = () => ({
  type: types.INSURERS_LIST_REQUEST,
});

/** Action creator
 * @returns {string} action
 */
export const insurerListFail = () => ({
  type: types.INSURERS_LIST_FAIL,
});
/** Action creator
 * @returns {string} action
 */
export const insurerListError = () => ({
  type: types.INSURERS_LIST_ERROR,
});

/** Action creator
 * @param {object} payload
 * @returns {object} action
 */
export const insurerListSuccess = (payload) => ({
  type: types.INSURERS_LIST_SUCCESS,
  payload,
});
