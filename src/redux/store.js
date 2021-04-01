import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

//Sagas Middleware
import createSagaMiddleware from "redux-saga";

//My Sagas
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

//DevToolsExtension
const composeEnhancers = composeWithDevTools({
  realtime: true,
});

let environment;
/* 
console.log(process.env.REACT_APP_ENV);
if (process.env.REACT_APP_ENV === "dev") {
  environment = composeEnhancers(applyMiddleware(sagaMiddleware));
} else if (process.env.REACT_APP_REACT_APP_ENV === "pro") {
  environment = applyMiddleware(sagaMiddleware);
} */

export let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);
