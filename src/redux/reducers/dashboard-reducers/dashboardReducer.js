import * as types from "../../actions/actionTypes";

const initialState = {
  config: {
    type: "",
    data: {},
    options: {}
  },
  list:[]
};


const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DASHBOARD_GET_SUCCESS:
      return { ...state, config: payload, list: state.list.push(payload) };

    default:
      return state;
  }
};

export default dashboardReducer;
