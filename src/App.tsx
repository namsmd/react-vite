import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { BaseLoaderScreen } from "@components/Base";
import { ProvideAuth } from "@hooks/useAuth";
import { AppRoutes } from "@router";

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
