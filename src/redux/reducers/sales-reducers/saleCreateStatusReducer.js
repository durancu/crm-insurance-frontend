import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const saleCreateStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.SALES_CREATE_REQUEST:
      return { loading: true, error: false };

    case types.SALES_CREATE_FAIL:
      return { loading: false, error: true };

    case types.SALES_CREATE_ERROR:
      return { loading: false, error: true };

    case types.SALES_CREATE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default saleCreateStatusReducer;
