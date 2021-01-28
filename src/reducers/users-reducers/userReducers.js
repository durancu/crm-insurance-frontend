import * as types from '../../actions/actionTypes'

export const initialState = {
  list: []
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_USER_SUCCESS:
      return { ...state, list: payload }
    default:
      return state;
  }
};

export default userReducer;