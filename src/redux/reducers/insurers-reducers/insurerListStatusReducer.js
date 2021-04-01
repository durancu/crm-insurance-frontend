import * as types from "../../actions/actionTypes";

export const initialState = {
  loading: false,
  error: false,
};

const insurerListStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.INSURERS_LIST_REQUEST:
      return { loading: true, error: false };

    case types.INSURERS_LIST_FAIL:
      return { loading: false, error: true };

    case types.INSURERS_LIST_ERROR:
      return { loading: false, error: true };

    case types.INSURERS_LIST_SUCCESS:
      return { loading: false, error: false };
    default:
      return state;
  }
};

export default insurerListStatusReducer;
