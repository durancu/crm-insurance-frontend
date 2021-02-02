import * as types from '../../actions/actionTypes'

const initialState = {
  loading: false,
  error: false
}

const customerGetStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case types.USER_GET_REQUEST:
      return { loading: true, error: false }
    case types.USER_GET_FAIL:
      return { loading: false, error: true }
    case types.USER_GET_SUCCESS:
      return { loading: false, error: false }

    default:
      return state
  }
}

export default customerGetStatusReducer