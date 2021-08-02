import React, { BaseHTMLAttributes } from "react";

type LoaderScreenProps = BaseHTMLAttributes<HTMLDivElement> & {
  type?: string;
};

const BaseLoaderScreen = ({ children, type = "fixed" }: LoaderScreenProps) => (
  <div
    className={`${type} bg-white top-0 left-0 right-0 bottom-0 z-50 boxes-container flex flex-col`}
  >
    {/* boxes css already import in index.html */}
    <div className="boxes">
      {Array.from({ length: 4 }, (_, k) => (
        <div className="box" key={k}>
          <div />
          <div />
          <div />
          <div />
        </div>
      ))}
    </div>
    {children}
  </div>
);

export default BaseLoaderScreen;
