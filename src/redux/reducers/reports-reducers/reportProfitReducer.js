import * as types from "../../actions/actionTypes";

const initialState = {
  list: []
};

const reportProfitReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REPORT_PROFIT_SUCCESS:
      return { ...state, list: payload };
    
    default:
      return state;
  }
};

export default reportProfitReducer;
