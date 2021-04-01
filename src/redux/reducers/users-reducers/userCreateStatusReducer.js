import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const userCreateStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.USER_CREATE_REQUEST:
      return { loading: true, error: false };

    case types.USER_CREATE_FAIL:
      return { loading: false, error: true };

    case types.USER_CREATE_ERROR:
      return { loading: false, error: true };

    case types.USER_CREATE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default userCreateStatusReducer;
