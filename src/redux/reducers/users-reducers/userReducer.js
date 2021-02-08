import * as types from "../../actions/actionTypes";

const initialState = {
  list: [],
  item: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOAD_SUCCESS:
      return { ...state, list: payload };

    case types.USER_CREATE_SUCCESS:
      return { ...state, list: state.list.concat(payload) };

    case types.USER_DELETE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(({ _id }) => _id !== payload),
      };

    case types.USER_GET_SUCCESS:
      return { ...state, item: payload };

    case types.USER_UPDATE_SUCCESS: {
      return { ...state };
    }

    default:
      return state;
  }
};

export default userReducer;
