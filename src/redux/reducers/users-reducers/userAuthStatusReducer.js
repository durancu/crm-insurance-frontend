import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const userAuthStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.USER_AUTH_REQUEST:
      return { loading: true, error: false };

    case types.USER_AUTH_FAIL:
      return { loading: false, error: true };

    case types.USER_AUTH_ERROR:
      return { loading: false, error: true };

    case types.USER_AUTH_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default userAuthStatusReducer;
