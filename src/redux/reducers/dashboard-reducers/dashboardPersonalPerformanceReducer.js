import * as types from "../../actions/actionTypes";

const initialState = {
  data: {
    message: "",
    metrics: [],
  },
};

const dashboardPersonalPerformanceReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case types.DASHBOARD_PERSONAL_PERFORMANCE_SUCCESS:
      return { ...state, data: payload };

    default:
      return state;
  }
};

export default dashboardPersonalPerformanceReducer;
