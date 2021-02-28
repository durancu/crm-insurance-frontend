import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const dashboardGetStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DASHBOARD_GET_REQUEST:
      return { loading: true, error: false };
    case types.DASHBOARD_GET_FAIL:
      return { loading: false, error: true };
    case types.DASHBOARD_GET_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default dashboardGetStatusReducer;
