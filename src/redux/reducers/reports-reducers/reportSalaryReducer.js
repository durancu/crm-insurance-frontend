import * as types from "../../actions/actionTypes";

const initialState = {
  list: []
};

const reportSalaryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REPORT_SALARY_SUCCESS:
      return { ...state, list: payload };
    
    default:
      return state;
  }
};

export default reportSalaryReducer;
