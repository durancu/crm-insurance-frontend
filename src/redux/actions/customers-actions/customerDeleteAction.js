import * as types from '../actionTypes'

/** Action creator
 * @param {string} _id
 * @returns {object} payload
*/
export const customerDeleteRequest = (_id) => ({
  type: types.CUSTOMERS_DELETE_REQUEST,
  payload:_id
})

/** Action creator
 * @returns {string} action
*/
export const customerDeleteFail = () => ({
  type: types.CUSTOMERS_DELETE_FAIL
})

/** Action creator
 * @param {object} payload
 * @returns {object} payload
*/
export const customerDeleteSuccess = (payload) => ({
  type: types.CUSTOMERS_DELETE_SUCCESS,
  payload
})

