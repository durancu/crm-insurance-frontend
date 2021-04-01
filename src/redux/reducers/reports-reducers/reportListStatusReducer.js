import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const reportListStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REPORT_LIST_REQUEST:
      return { loading: true, error: false };

    case types.REPORT_LIST_FAIL:
      return { loading: false, error: true };

    case types.REPORT_LIST_ERROR:
      return { loading: false, error: true };

    case types.REPORT_LIST_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default reportListStatusReducer;
