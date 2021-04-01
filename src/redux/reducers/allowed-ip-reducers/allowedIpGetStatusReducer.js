import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const allowedIpGetStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.ALLOWED_IP_GET_REQUEST:
      return { loading: true, error: false };

    case types.ALLOWED_IP_GET_FAIL:
      return { loading: false, error: true };

    case types.ALLOWED_IP_GET_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default allowedIpGetStatusReducer;
