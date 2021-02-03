import { spawn } from 'redux-saga/effects'
//USER
import userAuthSaga from './user-sagas/userAuthSaga'
import userLoadListSaga from './user-sagas/userLoadListSaga'
import userCreateSaga from './user-sagas/userCreateSaga'
//Customers
import customerLoadListSaga from './customer-sagas/customerLoadListSaga'

const sagas = function* sagas() {
  //User
  yield spawn(userAuthSaga)
  yield spawn(userLoadListSaga)
  yield spawn(userCreateSaga)
  //Customers
  yield spawn(customerLoadListSaga)
}

export default sagas