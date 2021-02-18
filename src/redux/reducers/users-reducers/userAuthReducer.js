import * as types from '../../actions/actionTypes'

const initialState = {
  authStatus: false,
}

const userAuthReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.USER_AUTH_SUCCESS:
      return { ...state, authStatus: true }
    default:
      return state
  }
}

export default userAuthReducer
