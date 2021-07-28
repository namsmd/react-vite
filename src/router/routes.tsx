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
    key: "LOGIN",
    meta: { isPublic: true },
    component: lazy(() => import("@pages/Login")),
  },
  {
    path: "/register",
    exact: true,
    key: "REGISTER",
    meta: { isPublic: true },
    component: lazy(() => import("@pages/Register")),
  },
  {
    path: "/404",
    exact: true,
    key: "404",
    meta: { isPublic: true },
    component: lazy(() => import("@pages/404")),
  },
  {
    path: "/app",
    key: "APP",
    meta: { isPublic: true },
    component: () => {
      const auth = useAuth();

      return (
        <Switch>
          {appRoutes[auth.user?.role || 0].map((route: any) => (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))}
        </Switch>
      );
    },
  },
];

export default routes;
