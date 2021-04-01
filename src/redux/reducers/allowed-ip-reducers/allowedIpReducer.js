import * as types from "../../actions/actionTypes";

const initialState = {
  allowedIp: false,
  ipAddress: "",
};

const allowedIpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ALLOWED_IP_GET_SUCCESS:
      return {
        ...state,
        allowedIp: payload.allowedIp,
        ipAddress: payload.ipAddress,
      };

    default:
      return state;
  }
};

export default allowedIpReducer;
