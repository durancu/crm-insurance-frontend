import * as types from '../actions/actionTypes'

const initialState = {
  count: 0
}

const testReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.COUNTER_UP:
      return { ...state, count: state.count + 1 }
    case types.COUNTER_DOWN:
      return { ...state, count: state.count - 1 }

    default:
      return state;
  }
}

export default testReducer
