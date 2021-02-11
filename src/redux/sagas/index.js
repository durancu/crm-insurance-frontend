import { spawn } from "redux-saga/effects";
//AUTH
import userAuthSaga from "./user-sagas/userAuthSaga";
import userCheckAuthSaga from "./user-sagas/userCheckAuthSaga";
//USERS
import userLoadListSaga from "./user-sagas/userLoadListSaga";
import userGetSaga from "./user-sagas/userGetSaga";
import userCreateSaga from "./user-sagas/userCreateSaga";
import userDeleteSaga from "./user-sagas/userDeleteSaga";
import userUpdateSaga from "./user-sagas/userUpdateSaga";
//CUSTOMERS
import customerLoadListSaga from "./customer-sagas/customerLoadListSaga";
import customerGetSaga from "./customer-sagas/customerGetSaga";
import customerCreateSaga from "./customer-sagas/customerCreateSaga";
import customerDeleteSaga from "./customer-sagas/customerDeleteSaga";
import customerUpdateSaga from "./customer-sagas/customerUpdateSaga";
//SALES
import saleListSaga from "./sale-sagas/saleListSaga";
//REPORTS
import reportListSaga from "./report-sagas/reportListSaga";

const sagas = function* sagas() {
  //AUTH
  yield spawn(userAuthSaga);
  yield spawn(userCheckAuthSaga);
  //USER
  yield spawn(userLoadListSaga);
  yield spawn(userGetSaga);
  yield spawn(userCreateSaga);
  yield spawn(userDeleteSaga);
  yield spawn(userUpdateSaga);
  //CUSTOMER
  yield spawn(customerLoadListSaga);
  yield spawn(customerGetSaga);
  yield spawn(customerCreateSaga);
  yield spawn(customerDeleteSaga);
  yield spawn(customerUpdateSaga);
  //SALE
  yield spawn(saleListSaga);
  //REPORT
  yield spawn(reportListSaga);
};

export default sagas;
