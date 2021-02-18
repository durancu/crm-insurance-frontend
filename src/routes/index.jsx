import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Auth from "../components/auth";

//Components URL
import { COMPONENT_LIST } from "./componentList";
import PrivateRoutes from "./PrivateRoutes";

export default function Routes() {
  return (
    <Switch>
      <Route path={"/auth"} exact component={Auth} />
      {COMPONENT_LIST.map((item, key) => (
        <PrivateRoutes
          key={key}
          exact
          path={item.url}
          component={item.component}
        />
      ))}
    </Switch>
  );
}
