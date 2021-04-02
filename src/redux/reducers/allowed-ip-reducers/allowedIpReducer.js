import * as types from "../../actions/actionTypes";

const initialState = {
  ipCheckStatus: 2,
  ipAddress: "",
};

const ipCheckStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ALLOWED_IP_GET_SUCCESS:
      console.log(payload);
      return {
        ...state,
        ipCheckStatus: payload.ipCheckStatus,
        ipAddress: payload.ipAddress,
      };

    default:
      return state;
  }
};

export default ipCheckStatusReducer;
