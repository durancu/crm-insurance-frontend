import * as types from '../actionTypes'

/** Action creator
 * @param {object} payload
 * @returns {object} action
*/
export const userCreateRequest = (payload) => ({
  type: types.USER_CREATE_REQUEST,
  payload
})

/** Action creator
 * @returns {string} action
*/
export const userCreateFail = () => ({
  type: types.USER_CREATE_FAIL
})

/** Action creator
 * @param {object} payload
 * @returns {object} action
*/
export const userCreateSuccess = (payload) => ({
  type: types.USER_CREATE_SUCCESS,
  payload
})