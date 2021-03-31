import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const customerCreateStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.CUSTOMERS_CREATE_REQUEST:
      return { loading: true, error: false };

    case types.CUSTOMERS_CREATE_FAIL:
      return { loading: false, error: true };
      
    case types.CUSTOMERS_CREATE_ERROR:
      return { loading: false, error: true };

    case types.CUSTOMERS_CREATE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default customerCreateStatusReducer;
