import * as types from '../actionTypes'

/** Action creator
 * @param {string} _id
 * @returns {object} payload
*/
export const customerGetRequest = (_id) => ({
  type: types.CUSTOMERS_GET_REQUEST,
  payload:_id
})

/** Action creator
 * @returns {string} action
*/
export const customerGetFail = () => ({
  type: types.CUSTOMERS_GET_FAIL
})

/** Action creator
 * @param {object} payload
 * @returns {object} payload
*/
export const customerGetSucces = (payload) => ({
  type: types.CUSTOMERS_GET_SUCCESS,
  payload
})
