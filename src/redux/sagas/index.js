import { spawn } from 'redux-saga/effects'
import userLoadListSaga from './user-sagas/userLoadListSaga'
import userCreateSaga from './user-sagas/userCreateSaga'

import customerLoadListSaga from './customer-sagas/customerLoadListSaga'

const sagas = function* sagas() {
  yield spawn(userLoadListSaga)
  yield spawn(userCreateSaga)
  //Customers
  yield spawn(customerLoadListSaga)
}

export default sagas