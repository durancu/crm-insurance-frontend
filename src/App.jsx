import React from 'react'

//Assets
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
//import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

//Store
import {store} from './redux/store'
import Users from './components/users/Users';

function App() {
  return (
    <Provider store={store}>
       <Users/>
    </Provider>
  );
}

export default App;
