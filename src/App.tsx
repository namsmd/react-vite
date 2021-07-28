import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@router";
import { BaseLoaderScreen } from "@components/Base";
import { ProvideAuth } from "@hooks/useAuth";

const App: React.FC = () => (
  <Suspense fallback={<BaseLoaderScreen />}>
    <ProvideAuth>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ProvideAuth>
  </Suspense>
);

export default App;
