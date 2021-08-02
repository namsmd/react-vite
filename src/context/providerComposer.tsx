import React from "react";

export const ProviderComposer = ({ contextProviders, children }: any) =>
  contextProviders.reduceRight(
    (
      // eslint-disable-next-line @typescript-eslint/no-shadow
      children: any,
      parent: React.DetailedReactHTMLElement<{ children: any }, HTMLElement>
    ) => React.cloneElement(parent, { children }),
    children
  );
