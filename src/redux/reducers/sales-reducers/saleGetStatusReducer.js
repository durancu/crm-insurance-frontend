import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const saleGetStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.SALES_GET_REQUEST:
      return { loading: true, error: false };
    case types.SALES_GET_FAIL:
      return { loading: false, error: true };
    case types.SALES_GET_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default saleGetStatusReducer;
