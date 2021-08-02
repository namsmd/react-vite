import React from "react";
import { AppRoutes } from "@router";
import { Provider } from "@context";

const App: React.FC = () => (
  <Provider>
    <AppRoutes />
  </Provider>
);

export default App;
