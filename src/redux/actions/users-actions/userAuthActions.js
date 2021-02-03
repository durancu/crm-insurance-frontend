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
  type: types.USER_AUTH_SUCCESS
})


