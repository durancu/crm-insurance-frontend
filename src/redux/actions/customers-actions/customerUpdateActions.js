import * as types from '../actionTypes'

/** Action creator
 * @param {object} customer
 * @param {string} _id
 * @returns {object} payload
*/
export const customerUpdateRequest = (customer, _id) => ({
  type: types.USER_UPDATE_REQUEST,
  payload: { customer, _id }
})

/** Action creator
 * @returns {string} Action
*/
export const customerUpdateFail = () => ({
  type: types.CUSTOMERS_UPDATE_FAIL,
})

/** Action creator
 * @param {object} payload
 * @returns {object} Actions
*/
export const customerUpdateSuccess = (payload) => ({
  type: types.CUSTOMERS_UPDATE_SUCCESS,
  payload
})

