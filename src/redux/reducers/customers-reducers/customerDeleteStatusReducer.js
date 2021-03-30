import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const customerDeleteStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.CUSTOMERS_DELETE_REQUEST:
      return { loading: true, error: false };

    case types.CUSTOMERS_DELETE_FAIL:
      return { loading: false, error: true };

    case types.CUSTOMERS_DELETE_ERROR:
      return { loading: false, error: true };

    case types.CUSTOMERS_DELETE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default customerDeleteStatusReducer;
