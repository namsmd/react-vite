import React from "react";
import { useAuth } from "@hooks/useAuth";
import { CusGuardProvider } from "@helpers/router-guards";
import { Router as BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import RenderRoutes from "./render";
import { privateRoutes, publicRoutes } from "./routes";
import { blockPublicPageAfterLogged, requireLogin } from "./guards";

import { BaseLoaderScreen } from "@components/Base";
import { MainLayout } from "@components/Layout";

const history = createBrowserHistory();

const MainRoutes = () => (
  <MainLayout>
    <RenderRoutes
      loading={() => <BaseLoaderScreen type="absolute" />}
      routes={privateRoutes}
    />
  </MainLayout>
);

const AppRoutes: React.FC = () => {
  const auth = useAuth();
  if (auth.user === false) return <BaseLoaderScreen />;

  return (
    <BrowserRouter history={history}>
      <CusGuardProvider
        auth={auth}
        guards={[requireLogin, blockPublicPageAfterLogged]}
      >
        <RenderRoutes loading={BaseLoaderScreen} routes={publicRoutes} />

        {auth.user && <MainRoutes />}
      </CusGuardProvider>
    </BrowserRouter>
  );
};

export { AppRoutes, RenderRoutes };
