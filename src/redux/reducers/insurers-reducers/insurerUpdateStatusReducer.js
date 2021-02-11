import * as types from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
};

const insurerUpdateStatusReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.INSURERS_UPDATE_REQUEST:
      return { loading: true, error: false };

    case types.INSURERS_UPDATE_FAIL:
      return { loading: false, error: true };

    case types.INSURERS_UPDATE_SUCCESS:
      return { loading: false, error: false };

    default:
      return state;
  }
};

export default insurerUpdateStatusReducer;
