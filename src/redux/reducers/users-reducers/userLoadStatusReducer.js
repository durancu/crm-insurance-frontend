import * as types from "../../actions/actionTypes";

export const initialState = {
  loading: false,
  error: false,
};

const userLoadStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.USER_LOAD_REQUEST:
      return { loading: true, error: false };

    case types.USER_LOAD_FAIL:
      return { loading: false, error: true };

    case types.USER_LOAD_ERROR:
      return { loading: false, error: true };

    case types.USER_LOAD_SUCCESS:
      return { loading: false, error: false };
    default:
      return state;
  }
};

export default userLoadStatusReducer;
