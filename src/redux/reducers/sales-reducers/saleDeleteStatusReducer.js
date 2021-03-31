import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const saleDeleteStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.SALES_DELETE_REQUEST:
      return { loading: true, error: false };

    case types.SALES_DELETE_FAIL:
      return { loading: false, error: true };

    case types.SALES_DELETE_ERROR:
      return { loading: false, error: true };

    case types.SALES_DELETE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default saleDeleteStatusReducer;
