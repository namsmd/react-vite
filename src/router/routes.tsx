import React, { lazy, Suspense } from "react";
import { Switch } from "react-router";
import { RouteWithSubRoutes } from "./render";

import { ROLE } from "@helpers/contants";
import { useAuth } from "@hooks/useAuth";

// modules routes
import PatientRoutes from "@modules/patient/routes";
import DoctorRoutes from "@modules/doctor/routes";

// public pages
import LoginPage from "@pages/Login";
import RegisterPage from "@pages/Register";
import NotFoundPage from "@pages/404";
import { BaseLoaderScreen } from "@components/Base";

const appRoutes: any = {
  [ROLE.PATIENT]: PatientRoutes,
  [ROLE.DOCTOR]: DoctorRoutes,
};

export const publicRoutes: any[] = [
  {
    path: "/",
    exact: true,
    meta: { key: "LOGIN", isPublic: true },
    component: LoginPage,
  },
  {
    path: "/register",
    exact: true,
    meta: { key: "REGISTER", isPublic: true },
    component: RegisterPage,
  },
  {
    path: "/404",
    exact: true,
    meta: { key: "404", isPublic: true },
    component: NotFoundPage,
  },
];

export const privateRoutes: any[] = [
  {
    path: "/app",
    meta: { key: "APP" },
    component: () => {
      const auth = useAuth();

      return (
        <Suspense fallback={<BaseLoaderScreen type="absolute" />}>
          <Switch>
            {appRoutes[auth.user?.role || 0].map((route: any) => (
              <RouteWithSubRoutes
                key={route.meta.key}
                ignoreGlobal
                {...route}
              />
            ))}
          </Switch>
        </Suspense>
      );
    },
  },
];
