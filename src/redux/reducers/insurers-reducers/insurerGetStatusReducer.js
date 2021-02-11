import * as types from '../../actions/actionTypes'

const initialState = {
  loading: false,
  error: false
}

const insurerGetStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case types.INSURERS_GET_REQUEST:
      return { loading: true, error: false }

    case types.INSURERS_GET_FAIL:
      return { loading: false, error: true }

    case types.INSURERS_GET_SUCCESS:
      return { loading: false, error: false }

    default:
      return state
  }
}

export default insurerGetStatusReducer