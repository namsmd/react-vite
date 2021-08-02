import React from "react";
import { GuardProvider, GuardFunction } from "@vendor/react-router-guards";
import {
  GuardFunctionRouteProps,
  GuardToRoute,
  Next,
} from "@vendor/react-router-guards/dist/types";

export const CusGuardProvider = ({ children, guards, auth }: any) => {
  const customGuards = guards.map(
    (g: GuardFunction) =>
      (to: GuardToRoute, form: GuardFunctionRouteProps, next: Next) =>
        g({ ...to, meta: { ...to.meta, user: auth?.user } }, form, next)
  );

  return <GuardProvider guards={customGuards}>{children}</GuardProvider>;
};
