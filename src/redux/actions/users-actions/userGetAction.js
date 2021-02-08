import * as types from '../actionTypes'

/** Action creator
 * @param {string} _id
 * @returns {object} payload
*/
export const userGetRequest = (_id) => ({
  type: types.USER_GET_REQUEST,
  payload:_id
})

/** Action creator
 * @returns {string} action
*/
export const userGetFail = () => ({
  type: types.USER_GET_FAIL
})

/** Action creator
 * @param {object} payload
 * @returns {object} payload
*/
export const userGetSuccess = (payload) => ({
  type: types.USER_GET_SUCCESS,
  payload
})
