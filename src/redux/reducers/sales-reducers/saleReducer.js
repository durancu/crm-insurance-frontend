import * as types from "../../actions/actionTypes";

const initialState = {
  list: [],
  item: {},
};

const saleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SALES_LIST_SUCCESS:
      return { ...state, list: payload };
    case types.SALES_CREATE_SUCCESS:
      return { ...state, /* list: state.list.concat(payload) */ };
    case types.SALES_DELETE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(({ _id }) => _id !== payload),
      };
    case types.SALES_GET_SUCCESS:
      return { ...state, item: payload };

    case types.SALES_UPDATE_SUCCESS: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default saleReducer;
