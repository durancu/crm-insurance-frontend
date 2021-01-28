import { combineReducers } from 'redux'
//User
import userReducer from './users-reducers/userReducers'
import userLoadStatusReducer from './users-reducers/userLoadStatusReducer'

export default combineReducers({
  //User
  userReducer,
  userLoadStatusReducer
})