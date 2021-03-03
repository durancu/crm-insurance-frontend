import * as types from "../../actions/actionTypes";

const initialState = {
  params: {},
};

const filterReducer = (state = initialState, { type, params }) => {
  switch (type) {
    case types.FILTER_SET_SUCCESS:
      return { ...state, params };
    default:
      return state;
  }
};
export default filterReducer;
