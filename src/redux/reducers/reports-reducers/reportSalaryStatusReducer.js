import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const reportSalaryStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REPORT_SALARY_REQUEST:
      return { loading: true, error: false };

    case types.REPORT_SALARY_FAIL:
      return { loading: false, error: true };

    case types.REPORT_SALARY_ERROR:
      return { loading: false, error: true };

    case types.REPORT_SALARY_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default reportSalaryStatusReducer;
