import * as types from "../actionTypes";

/** Action creator
 * @param {object} user
 * @param {string} _id
 * @returns {object} payload
 */
export const userUpdateRequest = (payload, _id) => {
  return {
    type: types.USER_UPDATE_REQUEST,
    payload,
    _id,
  };
};

/** Action creator
 * @returns {string} Action
 */
export const userUpdateFail = () => ({
  type: types.USER_UPDATE_FAIL,
});

/** Action creator
 * @param {object} payload
 * @returns {object} Actions
 */
export const userUpdateSuccess = (payload) => ({
  type: types.USER_UPDATE_SUCCESS,
  payload,
});
