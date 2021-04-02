import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

//Sagas Middleware
import createSagaMiddleware from "redux-saga";

//My Sagas
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export let store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);
