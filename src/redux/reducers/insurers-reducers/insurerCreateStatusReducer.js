import * as types from '../../actions/actionTypes'

const initialState = {
  loading: false,
  error: false
}

const insurerCreateStatusReducer = (state = initialState, { type }) => {
  switch (type) {

    case types.INSURERS_CREATE_REQUEST:
      return { loading: true, error: false }

    case types.INSURERS_CREATE_FAIL:
      return { loading: false, error: true }

    case types.INSURERS_CREATE_SUCCESS:
      return { loading: false, error: false }

    default:
      return state
  }
}

export default insurerCreateStatusReducer