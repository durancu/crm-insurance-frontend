import * as types from '../../actions/actionTypes'

export const initialState = {
  loading: false,
  error: false
}

const userLoadStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.LOAD_USER_REQUEST:
      return { loading: true, error: false }
    case types.LOAD_USER_FAIL:
      return { loading: false, error: true }
    case types.LOAD_USER_SUCCESS:
      return { loading: false, error: false }
    default:
      return state;
  }
}

export default userLoadStatusReducer;