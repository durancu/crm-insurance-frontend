import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Auth from "../components/auth";
import Page403 from "../components/globals/Page403";
/* import Page404 from "../components/globals/Page404"; */

//Components URL
import { COMPONENT_LIST } from "./componentList";
import PrivateRoutes from "./PrivateRoutes";

export default function Routes() {
  return (
    <Switch>
      <Route path={"/auth"} exact component={Auth} />
      <Route path={"/403"} exact component={Page403} />
      {/* <Route path={"/*"} component={Page404} /> */}
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
