import * as types from "../../actions/actionTypes";

const initialState = {
  checkIpStatus: 2,
  ipAddress: "",
};

const checkIpStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ALLOWED_IP_GET_SUCCESS:
      return {
        ...state,
        checkIpStatus: payload.checkIpStatus,
        ipAddress: payload.ipAddress,
      };

    default:
      return state;
  }
};

export default checkIpStatusReducer;
