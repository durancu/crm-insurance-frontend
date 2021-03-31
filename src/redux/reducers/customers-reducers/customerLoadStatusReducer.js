import * as types from "../../actions/actionTypes";

export const initialState = {
  loading: false,
  error: false,
};

const customerLoadStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.CUSTOMERS_LOAD_REQUEST:
      return { loading: true, error: false };

    case types.CUSTOMERS_LOAD_FAIL:
      return { loading: false, error: true };

    case types.CUSTOMERS_LOAD_ERROR:
      return { loading: false, error: true };

    case types.CUSTOMERS_LOAD_SUCCESS:
      return { loading: false, error: false };
    default:
      return state;
  }
};

export default customerLoadStatusReducer;
