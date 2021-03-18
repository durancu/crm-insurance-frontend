import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const reportProfitStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REPORT_PROFIT_REQUEST:
      return { loading: true, error: false };
    case types.REPORT_PROFIT_FAIL:
      return { loading: false, error: true };
    case types.REPORT_PROFIT_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default reportProfitStatusReducer;
