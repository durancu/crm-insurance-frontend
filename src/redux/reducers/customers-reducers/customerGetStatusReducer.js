import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const customerGetStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CUSTOMERS_GET_REQUEST:
      return { loading: true, error: false };

    case types.CUSTOMERS_GET_FAIL:
      return { loading: false, error: true };

    case types.CUSTOMERS_GET_ERROR:
      return { loading: false, error: true };

    case types.CUSTOMERS_GET_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default customerGetStatusReducer;
