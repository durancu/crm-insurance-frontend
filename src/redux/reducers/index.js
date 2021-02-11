import { combineReducers } from "redux";

import testReducer from "./testReducer";
//Global

//AUTH
import userAuthReducer from "./users-reducers/userAuthReducer";
import userAuthStatusReducer from "./users-reducers/userAuthStatusReducer";
import userCheckAuthStatusReducer from "./users-reducers/userCheckAuthStatusReducer";
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

//SALE
import saleReducer from "./sales-reducers/saleReducer";
import saleListStatusReducer from "./sales-reducers/saleListStatusReducer";

//REPORT
import reportReducer from "./reports-reducers/reportReducer";
import reportListStatusReducer from "./reports-reducers/reportListStatusReducer";

export default combineReducers({
  testReducer,
  //Global
  //AUTH
  userAuthReducer,
  userAuthStatusReducer,
  userCheckAuthStatusReducer,
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
  //REPORT
  saleReducer,
  saleListStatusReducer,
  //REPORT
  reportReducer,
  reportListStatusReducer,
});
