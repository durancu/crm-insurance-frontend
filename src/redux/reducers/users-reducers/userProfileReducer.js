import * as types from "../../actions/actionTypes";
const initialState = {
  user: {},
  authCheck: false,
};

const userProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_PROFILE_GET_SUCCESS:
      return { ...state, user: payload, authCheck: true };
    case types.USER_PROFILE_SET_SUCCESS:
      return { ...state, user: payload, authCheck: true };
    case types.USER_AUTH_SUCCESS:
      return { ...state, authCheck: true };
    case types.USER_CHECK_AUTH_SUCCESS:
      return { ...state, user: payload, authCheck: true };
    case types.USER_CHECK_AUTH_FAIL:
      return { ...state, authCheck: false };
    case types.USER_LOGOUT_SUCCESS:
      return { ...state, authCheck: false };
    default:
      return state;
  }
};

export default userProfileReducer;
