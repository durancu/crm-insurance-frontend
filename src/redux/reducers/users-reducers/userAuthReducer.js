import * as types from '../../actions/actionTypes'

const initialState = {
  authStatus: false,
  user: {}
}

const userAuthReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.USER_AUTH_SUCCESS:
      return { ...state, authStatus: true }
    case types.USER_CHECK_AUTH_SUCCESS:
      return { ...state, authStatus: true }
    case types.USER_CHECK_AUTH_FAIL:
      return { user: {}, authStatus: false }
    default:
      return state
  }
}

export default userAuthReducer
