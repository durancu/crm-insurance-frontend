import * as types from "../../actions/actionTypes";

export const initialState = {
  loading: false,
  error: false,
};

const userProfileGetStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.USER_PROFILE_GET_REQUEST:
      return { loading: true, error: false };

    case types.USER_PROFILE_GET_FAIL:
      return { loading: false, error: true };

    case types.USER_PROFILE_GET_ERROR:
      return { loading: false, error: true };

    case types.USER_PROFILE_GET_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default userProfileGetStatusReducer;
