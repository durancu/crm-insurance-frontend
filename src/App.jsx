import React from 'react'

//Assets
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
//import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

//Store
import {store} from './redux/store'
import Customers from './components/customers';

function App() {
  return (
    <Provider store={store}>
      <Customers/>
    </Provider>
  );
}

export default App;
