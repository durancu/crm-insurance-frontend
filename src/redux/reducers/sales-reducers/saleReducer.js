import * as types from '../../actions/actionTypes'

const initialState = {
list:[]
}

const saleReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case types.SALES_LIST_SUCCESS:
    return { ...state, list: payload }

  default:
    return state
  }
}

export default saleReducer