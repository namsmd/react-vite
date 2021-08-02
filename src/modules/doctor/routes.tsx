import { lazy } from "react";

const routes: any[] = [
  {
    path: "/app",
    exact: true,
    meta: { key: "DOCTOR_DASHBOARD" },
    component: lazy(() => import("./pages/Dashboard")),
  },
];

export default routes;
