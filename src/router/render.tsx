import React from "react";
import { Switch } from "react-router-dom";
import { GuardedRoute } from "react-router-guards";

export const RouteWithSubRoutes = (route: any) => (
  <GuardedRoute
    path={route.path}
    exact={route.exact}
    meta={route.meta}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
);

const RenderRoutes = ({ routes }: any) => (
  <Switch>
    {routes.map((route: any) => (
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}
  </Switch>
);

export default RenderRoutes;
