import * as types from "../actionTypes";

/** Action creator
 * @param {object} customer
 * @param {string} _id
 * @returns {object} payload
 */
export const customerUpdateRequest = (payload, _id) => {
  return {
    type: types.CUSTOMERS_UPDATE_REQUEST,
    payload,
    _id,
  };
};

/** Action creator
 * @returns {string} Action
 */
export const customerUpdateFail = () => ({
  type: types.CUSTOMERS_UPDATE_FAIL,
});
/** Action creator
 * @returns {string} Action
 */
export const customerUpdateError = () => ({
  type: types.CUSTOMERS_UPDATE_ERROR,
});

/** Action creator
 * @param {object} payload
 * @returns {object} Actions
 */
export const customerUpdateSuccess = (payload) => ({
  type: types.CUSTOMERS_UPDATE_SUCCESS,
  payload,
});
