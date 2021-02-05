import { spawn } from "redux-saga/effects";
//USER
import userAuthSaga from "./user-sagas/userAuthSaga";
import userCheckAuthSaga from "./user-sagas/userCheckAuthSaga";
import userLoadListSaga from "./user-sagas/userLoadListSaga";
import userCreateSaga from "./user-sagas/userCreateSaga";
//Customers
import customerLoadListSaga from "./customer-sagas/customerLoadListSaga";
import customerCreateSaga from "./customer-sagas/customerCreateSaga";
import customerDeleteSaga from "./customer-sagas/customerDeleteSaga";

const sagas = function* sagas() {
  //User
  yield spawn(userAuthSaga);
  yield spawn(userCheckAuthSaga);
  yield spawn(userLoadListSaga);
  yield spawn(userCreateSaga);
  //Customers
  yield spawn(customerLoadListSaga);
  yield spawn(customerCreateSaga);
  yield spawn(customerDeleteSaga);
};

export default sagas;
