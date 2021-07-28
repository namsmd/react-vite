import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BaseLoaderScreen } from "@components/Base";
import { GuardProvider } from "react-router-guards";
import RenderRoutes from "./render";
import { requireLogin } from "./guards";
import Routes from "./routes";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <GuardProvider guards={[requireLogin]} loading={BaseLoaderScreen}>
      <RenderRoutes routes={Routes} />
    </GuardProvider>
  </BrowserRouter>
);

export { AppRoutes, RenderRoutes };
