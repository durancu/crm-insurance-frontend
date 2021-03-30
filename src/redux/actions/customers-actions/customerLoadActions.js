import * as types from "../actionTypes";

/** Action creator
 * @returns {string} action
 */
export const customerLoadRequest = () => ({
  type: types.CUSTOMERS_LOAD_REQUEST,
});

/** Action creator
 * @returns {string} action
 */
export const customerLoadFail = () => ({
  type: types.CUSTOMERS_LOAD_FAIL,
});
/** Action creator
 * @returns {string} action
 */
export const customerLoadError = () => ({
  type: types.CUSTOMERS_LOAD_ERROR,
});

/** Action creator
 * @param {object} payload
 * @returns {object} action
 */
export const customerLoadSuccess = (payload) => ({
  type: types.CUSTOMERS_LOAD_SUCCESS,
  payload,
});
