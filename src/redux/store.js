import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
/* import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction' */

//Sagas Middleware
import createSagaMiddleware from 'redux-saga'

//My Sagas
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
/* 
//DevToolsExtension
const composeEnhancers = composeWithDevTools({
  realtime: true,
}); */

export let store = createStore(reducers, (applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)