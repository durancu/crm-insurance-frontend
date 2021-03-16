import { spawn } from "redux-saga/effects";
//AUTH
import userAuthSaga from "./user-sagas/userAuthSaga";
import userLogoutSaga from "./user-sagas/userLogoutSaga";
//PROFILE
import userProfileSaga from "./user-sagas/userProfileSaga";
import userProfileGetSaga from "./user-sagas/userProfileGetSaga";
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
//INSURERS
import insurerListSaga from "./insurer-sagas/insurerListSaga";
import insurerGetSaga from "./insurer-sagas/insurerGetSaga";
import insurerCreateSaga from "./insurer-sagas/insurerCreateSaga";
import insurerDeleteSaga from "./insurer-sagas/insurerDeleteSaga";
import insurerUpdateSaga from "./insurer-sagas/insurerUpdateSaga";
//SALES
import saleListSaga from "./sale-sagas/saleListSaga";
import saleCreateSaga from "./sale-sagas/saleCreateSaga";
import saleGetSaga from "./sale-sagas/saleGetSaga";
import saleDeleteSaga from "./sale-sagas/saleDeleteSaga";
import saleUpdateSaga from "./sale-sagas/saleUpdateSaga";
//REPORTS
import reportListSaga from "./report-sagas/reportListSaga";
import reportSalarySaga from "./report-sagas/reportSalarySaga";
import reportProfitSaga from "./report-sagas/reportProfitSaga";
//REPORTS
import dashboardGetSaga from "./dashboard-sagas/dashboardGetSaga";
import dashboardPersonalPerformanceSaga from "./dashboard-sagas/dashboardPersonalPerformanceSaga";

//FILTER
import filterSaga from "./filter-sagas/filterSaga";

const sagas = function* sagas() {
  //AUTH
  yield spawn(userAuthSaga);
  yield spawn(userLogoutSaga);
  //Profile
  yield spawn(userProfileSaga);
  yield spawn(userProfileGetSaga);
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
  //Insurer
  yield spawn(insurerListSaga);
  yield spawn(insurerGetSaga);
  yield spawn(insurerCreateSaga);
  yield spawn(insurerDeleteSaga);
  yield spawn(insurerUpdateSaga);
  //SALE
  yield spawn(saleListSaga);
  yield spawn(saleCreateSaga);
  yield spawn(saleGetSaga);
  yield spawn(saleDeleteSaga);
  yield spawn(saleUpdateSaga);
  //REPORT
  yield spawn(reportListSaga);
  yield spawn(reportSalarySaga);
  yield spawn(reportProfitSaga);
  //DASHBOARD
  yield spawn(dashboardGetSaga);
  yield spawn(dashboardPersonalPerformanceSaga);
  //FILTER
  yield spawn(filterSaga);
};

export default sagas;
