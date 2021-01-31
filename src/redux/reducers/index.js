import { combineReducers } from 'redux'

import testReducer from './testReducer'
//User
import userReducer from './users-reducers/userReducers'
import userLoadStatusReducer from './users-reducers/userLoadStatusReducer'
import userCreateStatusReducer from './users-reducers/userCreateStatusReducer'

export default combineReducers({
  testReducer,
  //User
  userReducer,
  userLoadStatusReducer,
  userCreateStatusReducer,
})