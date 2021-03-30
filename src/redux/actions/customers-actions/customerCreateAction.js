import * as types from "../actionTypes";

/** Action creator
 * @param {object} payload
 * @returns {object} payload
 */
export const customerCreateRequest = (payload) => ({
  type: types.CUSTOMERS_CREATE_REQUEST,
  payload,
});

/** Action creator
 * @returns {string} action
 */
export const customerCreateFail = () => ({
  type: types.CUSTOMERS_CREATE_FAIL,
});
/** Action creator
 * @returns {string} action
 */
export const customerCreateError = () => ({
  type: types.CUSTOMERS_CREATE_ERROR,
});

/** Action creator
 * @param {object} payload
 * @returns {object} payload
 */
export const customerCreateSuccess = (payload) => ({
  type: types.CUSTOMERS_CREATE_SUCCESS,
  payload,
});
