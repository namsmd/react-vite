import React from "react";
import { ProvideAuth, ProvideViewPort } from "@hooks";
import { ProviderComposer } from "./providerComposer";

export const Provider = ({ children }: any) => (
  <ProviderComposer contextProviders={[<ProvideAuth />, <ProvideViewPort />]}>
    {children}
  </ProviderComposer>
);
