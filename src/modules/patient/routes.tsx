import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const routes: any[] = [
  {
    path: "/app",
    exact: true,
    meta: { key: "PATIENT_DASHBOARD" },
    component: lazy(() => import("./pages/Dashboard")),
  },
  {
    path: "/app/test-result",
    exact: true,
    meta: { key: "PATIENT_DASHBOARD" },
    component: lazy(() => import("./pages/BloodTestResult")),
  },
  {
    path: "*",
    exact: true,
    meta: { key: "NOT_MATCH" },
    component: () => <Redirect to="/404" />,
  },
];

export default routes;
