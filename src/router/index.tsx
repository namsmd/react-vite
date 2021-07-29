import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BaseLoaderScreen } from "@components/Base";

import { useAuth } from "@hooks/useAuth";
import { CusGuardProvider } from "@helpers/router-guards";
import { requireLogin, blockPublicPageAfterLogged } from "./guards";

import Routes from "./routes";
import RenderRoutes from "./render";

const AppRoutes: React.FC = () => {
  const auth = useAuth();

  // show loading screen while first time fetching user data
  if (auth.user === false) return <BaseLoaderScreen />;

  return (
    <BrowserRouter>
      <CusGuardProvider
        auth={auth}
        loading={BaseLoaderScreen}
        guards={[requireLogin, blockPublicPageAfterLogged]}
      >
        <RenderRoutes routes={Routes} />
      </CusGuardProvider>
    </BrowserRouter>
  );
};

export { AppRoutes, RenderRoutes };
