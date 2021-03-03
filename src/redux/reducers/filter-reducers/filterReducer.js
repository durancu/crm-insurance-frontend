import * as types from "../../actions/actionTypes";

const initialState = {
  params: {},
};

const filterReducer = (state = initialState, { type, params }) => {
  switch (type) {
    case types.FILTER_SET_SUCCESS:
      //console.log(params);
      return { ...state, params:params};
    default:
      return state;
  }
};
export default filterReducer;
