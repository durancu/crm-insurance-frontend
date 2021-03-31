import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const userDeleteStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.USER_DELETE_REQUEST:
      return { loading: true, error: false };

    case types.USER_DELETE_FAIL:
      return { loading: false, error: true };

    case types.USER_DELETE_ERROR:
      return { loading: false, error: true };

    case types.USER_DELETE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default userDeleteStatusReducer;
