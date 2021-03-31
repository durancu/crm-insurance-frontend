import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const userUpdateStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.USER_UPDATE_REQUEST:
      return { loading: true, error: false };

    case types.USER_UPDATE_FAIL:
      return { loading: false, error: true };

    case types.USER_UPDATE_ERROR:
      return { loading: false, error: true };

    case types.USER_UPDATE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default userUpdateStatusReducer;
