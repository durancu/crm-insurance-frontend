import * as types from '../actionTypes'

export const filterGetRequest = (params={}) => ({
    type: types.FILTER_SET_REQUEST,
    params
})
export const filterGetFail = () => ({
    type: types.FILTER_SET_FAIL,
})
export const filterGetSuccess = (params) => ({
    type: types.FILTER_SET_SUCCESS,
    params
})
