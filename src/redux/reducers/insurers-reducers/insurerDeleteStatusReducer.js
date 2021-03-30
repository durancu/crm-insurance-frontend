import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const insurerDeleteStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.INSURERS_DELETE_REQUEST:
      return { loading: true, error: false };

    case types.INSURERS_DELETE_FAIL:
      return { loading: false, error: true };

    case types.INSURERS_DELETE_ERROR:
      return { loading: false, error: true };

    case types.INSURERS_DELETE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default insurerDeleteStatusReducer;
