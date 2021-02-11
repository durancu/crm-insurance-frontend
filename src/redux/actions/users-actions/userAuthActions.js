import * as types from '../actionTypes'

/** Action Creator
 * @param {object} payload required
 * @returns {object} action and object
*/
export const userAuthRequest = (payload) => ({
  type: types.USER_AUTH_REQUEST,
  payload
})

/** Action Creator
 * @returns {string} action
*/
export const userAuthFail = () => ({
  type: types.USER_AUTH_FAIL
})

/** Action Creator
 * @returns {object} action and object
*/
export const userAuthSuccess = () => ({
  type: types.USER_AUTH_SUCCESS,
})

/** Action Creator
 * @returns {string} action
*/
export const userCheckAuthRequest = () => ({
  type: types.USER_CHECK_AUTH_REQUEST,
})

/** Action Creator
 * @returns {string} action
*/
export const userCheckAuthFail = () => ({
  type: types.USER_CHECK_AUTH_FAIL,
})

/** Action Creator
 * @returns {string} action
*/
export const userCheckAuthSuccess = (payload) => ({
  type: types.USER_CHECK_AUTH_SUCCESS,
  payload
})


