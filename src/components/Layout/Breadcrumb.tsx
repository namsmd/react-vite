import React from "react";

const Breadcrumb = () => (
  <nav aria-label="breadcrumb">
    <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
      <li className="pr-4">Home</li>
      <li className="px-4 text-gray-700" aria-current="page">
        Blog
      </li>
    </ol>
  </nav>
);

export default Breadcrumb;
