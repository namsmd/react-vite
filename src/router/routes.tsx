import React, { lazy } from "react";
import { useAuth } from "@hooks/useAuth";
import PatientRoutes from "@modules/patient/routes";
import { ROLE } from "@helpers/contants";
import { Switch } from "react-router";
import { RouteWithSubRoutes } from "./render";

const appRoutes: any = {
  [ROLE.PATIENT]: PatientRoutes,
};

const routes: any[] = [
  {
    path: "/",
    exact: true,
    meta: { key: "LOGIN", isPublic: true },
    component: lazy(() => import("@pages/Login")),
  },
  {
    path: "/register",
    exact: true,
    meta: { key: "REGISTER", isPublic: true },
    component: lazy(() => import("@pages/Register")),
  },
  {
    path: "/404",
    exact: true,
    meta: { key: "404", isPublic: true },
    component: lazy(() => import("@pages/404")),
  },
  {
    path: "/app",
    meta: { key: "APP", isPublic: true },
    component: () => {
      const auth = useAuth();

      return (
        <Switch>
          {appRoutes[auth.user?.role || 0].map((route: any) => (
            <RouteWithSubRoutes key={route.meta.key} {...route} />
          ))}
        </Switch>
      );
    },
  },
];

export default routes;
