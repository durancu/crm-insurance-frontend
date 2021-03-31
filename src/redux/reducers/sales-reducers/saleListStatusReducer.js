import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const saleListStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.SALES_LIST_REQUEST:
      return { loading: true, error: false };

    case types.SALES_LIST_FAIL:
      return { loading: false, error: true };

    case types.SALES_LIST_ERROR:
      return { loading: false, error: true };

    case types.SALES_LIST_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default saleListStatusReducer;
