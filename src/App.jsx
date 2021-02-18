import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//Assets
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Containers from "./components/globals/Container";
import Routes from "./routes";

//Store
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Containers>
          <Routes />
        </Containers>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
