import { combineReducers } from 'redux'

import testReducer from './testReducer'
//User
import userAuthReducer from './users-reducers/userAuthReducer'
import userAuthStatusReducer from './users-reducers/userAuthStatusReducer'
import userCheckAuthStatusReducer from './users-reducers/userCheckAuthStatusReducer'
import userReducer from './users-reducers/userReducers'
import userLoadStatusReducer from './users-reducers/userLoadStatusReducer'
import userCreateStatusReducer from './users-reducers/userCreateStatusReducer'
//Customer
import customerReducers from './customers-reducers/customerReducers'
import customerLoadStatusReducer from './customers-reducers/customerLoadStatusReducer'
import customerCreateStatusReducer from './customers-reducers/customerCreateStatusReducer'
import customerDeleteStatusReducer from './customers-reducers/customerDeleteStatusReducer'
import customerGetStatusReducer from './customers-reducers/customerGetStatusReducer'
import customerUpdateStatusReducer from './customers-reducers/customerUpdateStatusReducer'


export default combineReducers({
  testReducer,
  //User
  userAuthReducer,
  userAuthStatusReducer,
  userCheckAuthStatusReducer,
  userReducer,
  userLoadStatusReducer,
  userCreateStatusReducer,
  //Customer
  customerReducers,
  customerLoadStatusReducer,
  customerCreateStatusReducer,
  customerDeleteStatusReducer,
  customerGetStatusReducer,
  customerUpdateStatusReducer
})