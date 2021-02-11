import * as types from "../actionTypes";

/** Action creator
 * @param {object} payload
 * @param {string} _id
 * @returns {object} payload
 */
export const insurerUpdateRequest = (payload, _id) => {
  return {
    type: types.INSURERS_UPDATE_REQUEST,
    payload,
    _id,
  };
};

/** Action creator
 * @returns {string} Action
 */
export const insurerUpdateFail = () => ({
  type: types.INSURERS_UPDATE_FAIL,
});

/** Action creator
 * @param {object} payload
 * @returns {object} Actions
 */
export const insurerUpdateSuccess = (payload) => ({
  type: types.INSURERS_UPDATE_SUCCESS,
  payload,
});
