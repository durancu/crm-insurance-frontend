import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const dashboardPersonalPerformanceStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.DASHBOARD_PERSONAL_PERFORMANCE_REQUEST:
      return { loading: true, error: false };
    case types.DASHBOARD_PERSONAL_PERFORMANCE_FAIL:
      return { loading: false, error: true };
    case types.DASHBOARD_PERSONAL_PERFORMANCE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default dashboardPersonalPerformanceStatusReducer;
