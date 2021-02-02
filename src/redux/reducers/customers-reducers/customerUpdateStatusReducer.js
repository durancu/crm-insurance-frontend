import * as types from '../../actions/actionTypes'

const initialState = {
  loading:false,
  error:false
}

const customerUpdateStatusReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case types.CUSTOMERS_UPDATE_REQUEST:
    return { loading:true,error:false}
  case types.CUSTOMERS_UPDATE_FAIL:
    return { loading:false,error:true}
  case types.CUSTOMERS_UPDATE_SUCCESS:
    return { loading:false,error:false}

  default:
    return state
  }
}

export default customerUpdateStatusReducer