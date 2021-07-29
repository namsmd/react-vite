import React from "react";

const BaseLoaderScreen: React.FC = () => (
  <div className="fixed bg-white top-0 left-0 right-0 bottom-0 z-50 boxes-container">
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
  </div>
);

export default BaseLoaderScreen;
