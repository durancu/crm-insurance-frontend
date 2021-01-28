import * as types from '../actionTypes'

export const userLoadRequest = () => ({
  type: types.LOAD_USER_REQUEST
})

export const userLoadFail = () => ({
  type: types.LOAD_USER_FAIL
})

export const userLoadSuccess = (payload) => ({
  type: types.LOAD_USER_SUCCESS,
  payload
})