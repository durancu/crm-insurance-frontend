import React from 'react'

//Assets
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
//import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import UserList from './components/users/UserList'

//Store
import {store} from './store'

function App() {
  return (
    <Provider store={store}>
        <UserList/>
    </Provider>
  );
}

export default App;
