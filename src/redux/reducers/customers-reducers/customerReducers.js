import * as types from '../../actions/actionTypes'

const initialState = {
  list: []
}

const customerReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CUSTOMERS_LOAD_SUCCESS:
      return { ...state, list: payload }

    case types.CUSTOMERS_CREATE_SUCCESS:
      return { ...state, list: state.list.concat(payload) }

    case types.CUSTOMERS_DELETE_SUCCESS:
      return { ...state, list: state.list.filter(({ _id }) => _id !== payload) }

    case types.CUSTOMERS_GET_SUCCESS:
      return { ...state, payload }

    case types.CUSTOMERS_UPDATE_SUCCESS:
      return { ...state, payload }//escribir el metodo de update

    default:
      return state;
  }
}

export default customerReducers;