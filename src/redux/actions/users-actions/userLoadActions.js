import * as types from '../actionTypes'

/** Action creator
 * @returns {string} action
*/
export const userLoadRequest = () => ({
  type: types.USER_LOAD_REQUEST
})

/** Action creator
 * @returns {string} action
*/
export const userLoadFail = () => ({
  type: types.USER_LOAD_FAIL
})

/** Action creator
 * @param {object} payload
 * @returns {object} action
*/
export const userLoadSuccess = (payload) => ({
  type: types.USER_LOAD_SUCCESS,
  payload
})