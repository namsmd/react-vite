import React from "react";
import { Switch } from "react-router-dom";
import { GuardedRoute } from "@vendor/react-router-guards";

export const RouteWithSubRoutes = (route: any) => {
  const routeRef = { ...route };
  delete routeRef.component;

  return (
    <GuardedRoute
      {...routeRef}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const RenderRoutes = ({ routes, loading }: any) => (
  <Switch>
    {routes.map((route: any) => (
      <RouteWithSubRoutes key={route.meta.key} loading={loading} {...route} />
    ))}
  </Switch>
);

export default RenderRoutes;
