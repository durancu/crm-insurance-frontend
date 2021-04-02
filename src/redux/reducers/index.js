import { combineReducers } from "redux";

import testReducer from "./testReducer";
//Global
import messageReducer from "./message-reducers/messageReducer";
import messageStatusReducer from "./message-reducers/messageStatusReducer";
import checkIpStatusReducer from './check-ip-status-reducers/checkIpStatusReducer'
import checkIpStatusGetStatusReducer from './check-ip-status-reducers/checkIpStatusGetStatusReducer'


//AUTH
import userAuthReducer from "./users-reducers/userAuthReducer";
import userAuthStatusReducer from "./users-reducers/userAuthStatusReducer";
import userCheckAuthStatusReducer from "./users-reducers/userCheckAuthStatusReducer";
//Profile
import userProfileReducer from "./users-reducers/userProfileReducer";
import userProfileStatusReducer from "./users-reducers/userProfileStatusReducer";
import userProfileGetStatusReducer from "./users-reducers/userProfileGetStatusReducer";
//USER
import userReducer from "./users-reducers/userReducer";
import userLoadStatusReducer from "./users-reducers/userLoadStatusReducer";
import userCreateStatusReducer from "./users-reducers/userCreateStatusReducer";
import userDeleteStatusReducer from "./users-reducers/userDeleteStatusReducer";
import userGetStatusReducer from "./users-reducers/userGetStatusReducer";
import userUpdateStatusReducer from "./users-reducers/userUpdateStatusReducer";
//CUSTOMER
import customerReducer from "./customers-reducers/customerReducer";
import customerLoadStatusReducer from "./customers-reducers/customerLoadStatusReducer";
import customerCreateStatusReducer from "./customers-reducers/customerCreateStatusReducer";
import customerDeleteStatusReducer from "./customers-reducers/customerDeleteStatusReducer";
import customerGetStatusReducer from "./customers-reducers/customerGetStatusReducer";
import customerUpdateStatusReducer from "./customers-reducers/customerUpdateStatusReducer";
//INSURER
import insurerReducer from "./insurers-reducers/insurerReducer";
import insurerListStatusReducer from "./insurers-reducers/insurerListStatusReducer";
import insurerCreateStatusReducer from "./insurers-reducers/insurerCreateStatusReducer";
import insurerDeleteStatusReducer from "./insurers-reducers/insurerDeleteStatusReducer";
import insurerGetStatusReducer from "./insurers-reducers/insurerGetStatusReducer";
import insurerUpdateStatusReducer from "./insurers-reducers/insurerUpdateStatusReducer";

//SALE
import saleReducer from "./sales-reducers/saleReducer";
import saleListStatusReducer from "./sales-reducers/saleListStatusReducer";
import saleCreateStatusReducer from "./sales-reducers/saleCreateStatusReducer";
import saleGetStatusReducer from "./sales-reducers/saleGetStatusReducer";
import saleDeleteStatusReducer from "./sales-reducers/saleDeleteStatusReducer";
import saleUpdateStatusReducer from "./sales-reducers/saleUpdateStatusReducer";

//REPORT
import reportReducer from "./reports-reducers/reportReducer";
import reportListStatusReducer from "./reports-reducers/reportListStatusReducer";
import reportSalaryReducer from "./reports-reducers/reportSalaryReducer";
import reportSalaryStatusReducer from "./reports-reducers/reportSalaryStatusReducer";
import reportProfitReducer from "./reports-reducers/reportProfitReducer";
import reportProfitStatusReducer from "./reports-reducers/reportProfitStatusReducer";

//DASHBOARD
import dashboardReducer from "./dashboard-reducers/dashboardReducer";
import dashboardStatusReducer from "./dashboard-reducers/dashboardStatusReducer";
import dashboardPersonalPerformanceReducer from "./dashboard-reducers/dashboardPersonalPerformanceReducer";
import dashboardPersonalPerformanceStatusReducer from "./dashboard-reducers/dashboardPersonalPerformanceStatusReducer";

import filterReducer from "./filter-reducers/filterReducer";

export default combineReducers({
  testReducer,
  //Global
  messageReducer,
  messageStatusReducer,
  //Allowed-IP
  checkIpStatusReducer,
  checkIpStatusGetStatusReducer,
  //AUTH
  userAuthReducer,
  userAuthStatusReducer,
  userCheckAuthStatusReducer,
  //Profile
  userProfileReducer,
  userProfileStatusReducer,
  userProfileGetStatusReducer,
  //USER
  userReducer,
  userLoadStatusReducer,
  userCreateStatusReducer,
  userDeleteStatusReducer,
  userGetStatusReducer,
  userUpdateStatusReducer,
  //CUSTOMER
  customerReducer,
  customerLoadStatusReducer,
  customerCreateStatusReducer,
  customerDeleteStatusReducer,
  customerGetStatusReducer,
  customerUpdateStatusReducer,
  //INSURER
  insurerReducer,
  insurerListStatusReducer,
  insurerCreateStatusReducer,
  insurerDeleteStatusReducer,
  insurerGetStatusReducer,
  insurerUpdateStatusReducer,
  //Sale
  saleReducer,
  saleListStatusReducer,
  saleCreateStatusReducer,
  saleGetStatusReducer,
  saleDeleteStatusReducer,
  saleUpdateStatusReducer,
  //REPORT
  reportReducer,
  reportListStatusReducer,
  reportSalaryReducer,
  reportSalaryStatusReducer,
  reportProfitReducer,
  reportProfitStatusReducer,
  //DASHBOARD
  dashboardReducer,
  dashboardStatusReducer,
  dashboardPersonalPerformanceReducer,
  dashboardPersonalPerformanceStatusReducer,
  //FIlter
  filterReducer,
});
