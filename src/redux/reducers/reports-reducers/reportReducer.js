import * as types from "../../actions/actionTypes";

const initialState = {
  list: {
    metrics: [],
    sales: [],
  },
};

const reportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REPORT_LIST_SUCCESS:
      return { ...state, list: payload };
    
    default:
      return state;
  }
};

export default reportReducer;
