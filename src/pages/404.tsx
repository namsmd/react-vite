import { BaseLoaderScreen } from "@components/Base";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => (
  <BaseLoaderScreen>
    <div className="mt-[150px] text-center">
      <h1 className="text-4xl mb-3">Aw jeez.</h1>
      <p className="text-sm text-opacity-80 mb-5">
        That page has gone missing.
      </p>
      <Link className="underline" to="/app">
        Hitch a ride back home.
      </Link>
    </div>
  </BaseLoaderScreen>
);

export default NotFoundPage;
