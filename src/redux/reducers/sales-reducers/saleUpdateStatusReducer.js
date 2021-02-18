import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const saleUpdateStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.SALES_UPDATE_REQUEST:
      return { loading: true, error: false };
    case types.SALES_UPDATE_FAIL:
      return { loading: false, error: true };
    case types.SALES_UPDATE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default saleUpdateStatusReducer;
