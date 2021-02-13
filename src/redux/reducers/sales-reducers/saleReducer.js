import * as types from "../../actions/actionTypes";

const initialState = {
  list: [],
};

const saleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SALES_LIST_SUCCESS:
      return { ...state, list: payload };
    case types.SALES_CREATE_SUCCESS:
      return { ...state, list: state.list.concat(payload) };

    default:
      return state;
  }
};

export default saleReducer;
