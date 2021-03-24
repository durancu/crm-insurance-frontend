import * as types from "../../actions/actionTypes";

const initialState = {
  config: {
    title: "",
    visible: false,
    type: "",
  },
  time: new Date()
};

const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.MESSAGE_LAUNCH_SUCCESS:
      return { ...state, config: payload, time: Date.now() };

    default:
      return state;
  }
};

export default messageReducer;
