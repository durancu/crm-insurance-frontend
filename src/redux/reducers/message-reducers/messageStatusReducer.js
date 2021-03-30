import * as types from '../../actions/actionTypes'

export const initialState = {
  loading: false,
  error  : false
}

const messageStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.MESSAGE_LAUNCH_REQUEST:
      return { loading: true, error: false }
      
    case types.MESSAGE_LAUNCH_FAIL:
      return { loading: false, error: true }
      
    case types.MESSAGE_LAUNCH_SUCCESS:
      return { loading: false, error: false }
    default:
      return state;
  }
}

export default messageStatusReducer;