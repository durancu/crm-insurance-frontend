import * as types from '../../actions/actionTypes'

export const initialState = {
  list: [],
  auth: false
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_AUTH_SUCCESS:
      return { ...state, auth: true }
    case types.USER_LOAD_SUCCESS:
      return { ...state, list: payload }
    case types.USER_CREATE_SUCCESS:
      return { ...state, list: state.list.concat(payload) }
    default:
      return state;
  }
};

export default userReducer;