import * as types from "../../actions/actionTypes";

const initialState = {
  config: {
    title: "",
    visible: false,
    type: "",
  },
};

const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.MESSAGE_LAUNCH_SUCCESS:
      return { ...state, config: payload };

    default:
      return state;
  }
};

export default messageReducer;
