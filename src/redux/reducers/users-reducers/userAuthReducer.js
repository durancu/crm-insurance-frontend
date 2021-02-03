import * as types from '../../actions/actionTypes'

const initialState = {
  auth: false
}

const userAuthReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.USER_AUTH_SUCCESS:
      return { auth: true }

    default:
      return state
  }
}

export default userAuthReducer
