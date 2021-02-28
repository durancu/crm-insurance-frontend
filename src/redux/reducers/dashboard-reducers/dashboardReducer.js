import * as types from "../../actions/actionTypes";

const initialState = {
  config: {
    type: "",
    data: {},
    options: {}
  },
};


const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DASHBOARD_GET_SUCCESS:
      
      return { ...state, config: payload };

    default:
      return state;
  }
};

export default dashboardReducer;
