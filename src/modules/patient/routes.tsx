import { lazy } from "react";

const routes: any[] = [
  {
    path: "/app",
    key: "PATIENT_DASHBOARD",
    exact: true,
    meta: { isPublic: true },
    component: lazy(() => import("./pages/Dashboard")),
  },
];

export default routes;
